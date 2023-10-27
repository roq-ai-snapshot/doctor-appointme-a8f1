import { UserInterface } from 'interfaces/user';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { ClinicInterface } from 'interfaces/clinic';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  patient_id: string;
  doctor_id: string;
  clinic_id: string;
  insurance_provider_id: string;
  reason_for_visit?: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  healthcare_provider?: HealthcareProviderInterface;
  clinic?: ClinicInterface;
  insurance_provider?: InsuranceProviderInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  clinic_id?: string;
  insurance_provider_id?: string;
  reason_for_visit?: string;
  notes?: string;
}
