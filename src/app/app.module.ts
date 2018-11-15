import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from 'src/indra-core';
import { ClientesModule } from './clientes/clientes.module';
import { ComunModule } from './comun/comun.module';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { NotificationComponent } from './notification/notification.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PERSONAS_COMPONENTS } from './personas/personas.component';
import { PersonasViewModelService, PersonasViewModelDAOService } from './personas/personas.service';
import { AuthInterceptor } from './comun/seguridad.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    NotificationComponent,
    DinamicoComponent,
    CalculadoraComponent,
    PERSONAS_COMPONENTS,
    PageNotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    IndraCoreModule,
    AppRoutingModule, ClientesModule, ComunModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: PersonasViewModelService, useClass: PersonasViewModelDAOService},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
