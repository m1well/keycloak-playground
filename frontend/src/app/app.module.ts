import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';
import { AdminRoleGuard } from './shared/guards/admin-role.guard';

function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> =>
    keycloak.init({
      config: environment.keycloakOptions.config,
      initOptions: environment.keycloakOptions.initOptions,
    }).then(success => {
      console.log('Init Keycloak connection success:', success)
    }).catch(error => {
      console.log('Init Keycloak connection failed:', error)
    });
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    AdminRoleGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
