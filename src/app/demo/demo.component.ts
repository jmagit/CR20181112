import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../comun/notification.service';
import { LoggerService } from 'src/indra-core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public nombre: string = 'mundo';
  public listado = [
    { id: 1, nombre: 'Toledo'},
    { id: 2, nombre: 'CIUDAD REAL'},
    { id: 3, nombre: 'cuenca'},
    { id: 4, nombre: 'GuadalajarA'},
  ];
  public idProvincia: number = 2;
  public fontSize = 24;

  public resultado: string;
  public visible = true;
  public estetica = { error: false, importante: true, urgente: true };

  constructor(public notify: NotificationService, private out: LoggerService) { }

  ngOnInit() {
  }

  public saluda(): void {
    this.resultado = `Hola ${this.nombre}`;
  }
  public despide(): void {
    this.resultado = `Adios ${this.nombre}`;
  }
  public di(algo: string): void {
    this.resultado = `Dice ${algo}`;
  }

  public cambia() {
    this.visible = !this.visible;
    this.estetica.error = !this.estetica.error;
    this.estetica.importante = !this.estetica.importante;
  }

  public calcula(a: number, b: number): number {
    return a + b;
  }

  public add(provincia: string) {
    if (!provincia) {
      this.out.error('Falta el mensaje de notificación.');
      return;
    }
    const newId: number = this.listado.length ?
      (this.listado[this.listado.length - 1].id + 1) : 1;
    this.listado.push({id: newId, nombre: provincia });
    this.idProvincia = newId;
  }
}
