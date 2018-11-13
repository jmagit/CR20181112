import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndraCoreModule, LoggerService } from 'src/indra-core';
import { ClientesModule } from './clientes/clientes.module';
import { ComunModule } from './comun/comun.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    IndraCoreModule,
    AppRoutingModule, ClientesModule, ComunModule,
  ],
  providers: [
    LoggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
