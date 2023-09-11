import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { searchValidationSchema } from 'validationSchema/searches';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getSearches();
    case 'POST':
      return createSearch();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSearches() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.search
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'search'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createSearch() {
    await searchValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.saved_search?.length > 0) {
      const create_saved_search = body.saved_search;
      body.saved_search = {
        create: create_saved_search,
      };
    } else {
      delete body.saved_search;
    }
    if (body?.trend_search?.length > 0) {
      const create_trend_search = body.trend_search;
      body.trend_search = {
        create: create_trend_search,
      };
    } else {
      delete body.trend_search;
    }
    const data = await prisma.search.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
