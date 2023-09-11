import * as yup from 'yup';

export const trendSearchValidationSchema = yup.object().shape({
  trend_id: yup.string().nullable().required(),
  search_id: yup.string().nullable().required(),
});
