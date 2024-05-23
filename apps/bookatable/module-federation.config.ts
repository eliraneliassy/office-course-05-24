import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'bookatable',
  exposes: {
    './Routes': 'apps/bookatable/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
