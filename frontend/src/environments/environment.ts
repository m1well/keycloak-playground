import { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';
import { KeycloakOptions } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth/',
  realm: 'playground-realm',
  clientId: 'playground-frontend',

};

const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: 'login-required',
  checkLoginIframe: false
};

const keycloakOptions: KeycloakOptions = {
  config: keycloakConfig,
  initOptions: keycloakInitOptions,
  enableBearerInterceptor: true
};

export const environment = {
  production: false,
  keycloakOptions
};
