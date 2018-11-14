import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemoComponent } from '../demo/demo.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { PersonasComponent } from '../personas/personas.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [HomeComponent, DemoComponent, CalculadoraComponent,
    PersonasComponent, ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Personas', component: PersonasComponent},
    { texto: 'Inicio', component: HomeComponent},
    { texto: 'Demo', component: DemoComponent},
    { texto: 'Calculadora', component: CalculadoraComponent},
  ];
  selecionado = this.menu[0].component;

  constructor() { }

  ngOnInit() {
  }
  selecciona(indice: number) {
    this.selecionado = this.menu[indice].component;
  }

}
