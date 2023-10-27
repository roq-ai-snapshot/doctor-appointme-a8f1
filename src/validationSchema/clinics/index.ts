import * as yup from 'yup';

export const clinicValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  email: yup.string().nullable(),
  name: yup.string().required(),
});
