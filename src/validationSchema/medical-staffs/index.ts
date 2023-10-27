import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  email: yup.string().nullable(),
  position: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
