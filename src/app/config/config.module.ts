import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { DatosComponent } from './datos/datos.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '', component: ConfigComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'pass', component: PasswordComponent },
];
@NgModule({
  declarations: [ConfigComponent, DatosComponent, PasswordComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class ConfigModule { }
