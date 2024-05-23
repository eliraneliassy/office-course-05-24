import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'backoffice',
  exposes: {
    './Routes': 'apps/backoffice/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
