import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  email: yup.string().nullable(),
  specialty: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
