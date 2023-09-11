import * as yup from 'yup';

export const trendValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
});
