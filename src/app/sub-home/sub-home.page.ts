import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sub-home',
  templateUrl: 'sub-home.page.html',
  styleUrls: ['sub-home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class SubHomePage {
  constructor() {}
}
