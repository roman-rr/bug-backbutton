import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor(public nav: NavController) {}

  goSubPage() {
    this.nav.navigateForward('sub-home');  
  }
}
