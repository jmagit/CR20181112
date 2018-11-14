import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from '../comun/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public readonly NotificationType: any = NotificationType;
  constructor(private notify: NotificationService) { }
  public get VM() { return this.notify; }

  ngOnInit() {
  }

}
