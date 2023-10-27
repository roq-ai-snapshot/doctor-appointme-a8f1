import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  name: string;
  address?: string;
  phone_number?: string;
  email?: string;
  coverage_details?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  coverage_details?: string;
  user_id?: string;
}
