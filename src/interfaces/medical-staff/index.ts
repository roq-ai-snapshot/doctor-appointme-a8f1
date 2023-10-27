import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalStaffInterface {
  id?: string;
  name: string;
  address?: string;
  phone_number?: string;
  email?: string;
  position?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MedicalStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  position?: string;
  user_id?: string;
}
