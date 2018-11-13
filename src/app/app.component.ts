import { Component } from '@angular/core';
import { NotificationService } from './comun/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';

  constructor(notify: NotificationService) {
    notify.add('Demo de notificacion');
    notify.remove(0);
    notify.remove(0);
    notify.add('');
  }
}
