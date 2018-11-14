import { Injectable } from '@angular/core';
import { NotificationService } from '../comun/notification.service';

export type ModoCRUD = 'list' | 'add' | 'edit' | 'view' | 'delete';

@Injectable({
  providedIn: 'root'
})
export class PersonasViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = null;
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected pk = 'id';

  constructor(protected notify: NotificationService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list(): void {
    if (this.listado == null) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 34},
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        { id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 50},
        { id: 4, nombre: 'Pablo', apellidos: 'Marmos', edad: 48},
      ];
    }
    this.modo = 'list';
  }
  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
      this.modo = 'edit';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }
  public view(key: any): void {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro?')) { return; }

    // tslint:disable-next-line:triple-equals
    const indice = this.listado.findIndex(item => item[this.pk] == key);
    if (indice >= 0) {
      this.listado.splice(indice, 1);
      this.list();
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }

  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  public send(): void {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        // tslint:disable-next-line:triple-equals
        const indice = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
        if (indice >= 0) {
          this.listado[indice] = this.elemento;
          this.cancel();
        } else {
          this.notify.add('Elemento no encontrado.');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }

}
