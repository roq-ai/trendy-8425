import * as yup from 'yup';

export const savedSearchValidationSchema = yup.object().shape({
  search_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
