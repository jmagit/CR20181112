import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [HomeComponent, DemoComponent]
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Inicio', component: HomeComponent},
    { texto: 'Demo', component: DemoComponent},
  ];
  selecionado = this.menu[0].component;

  constructor() { }

  ngOnInit() {
  }
  selecciona(indice: number) {
    this.selecionado = this.menu[indice].component;
  }

}
