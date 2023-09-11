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
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Research Analyst'],
  tenantName: 'Company',
  applicationName: 'Trendy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company registration',
    'Manage team members and research analysts',
    'Manage company information',
    'View saved search results',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3d1ad133-989e-48e1-8f8e-e8a9383ce056',
};
