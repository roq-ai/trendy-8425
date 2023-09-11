import * as yup from 'yup';

export const searchValidationSchema = yup.object().shape({
  query: yup.string().required(),
  filter: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
