import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  reason_for_visit: yup.string().nullable(),
  notes: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
  insurance_provider_id: yup.string().nullable().required(),
});
