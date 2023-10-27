interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read clinic information',
    'Read insurance provider information',
    'Read appointment information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage clinic details',
    'Manage insurance provider data',
    'Manage appointments',
    'Manage healthcare providers',
    'Manage medical staff',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2ca7f51d-ac21-4ba4-bc0f-b4ee6488eb74',
};
