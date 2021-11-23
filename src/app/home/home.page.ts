import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public user: UserService, public alertController: AlertController) { }
  userData = []
  showUser() {
    this.user.showUserAPI().subscribe(res => {
      this.userData = res.data;
    })
  }

  async showAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Employee App',
      message: msg,
      buttons: ['OK', 'Cancel']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  createUser() {
    let userData = {
      "name": "Rahul Jain",
      "job": "Software Developer"
    }
    this.user.createUser(userData).subscribe(res => {
      let message = `<p>User is sucessfully create at time ${res.createdAt}</p>`;
      console.log(res);
      this.showAlert(message);
    })
  }

}
