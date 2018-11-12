import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndraCoreModule } from 'src/indra-core';
import { ClientesModule } from './clientes/clientes.module';
import { ComunModule } from './comun/comun.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndraCoreModule,
    AppRoutingModule, ClientesModule, ComunModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
