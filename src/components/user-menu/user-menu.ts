import { AlertController, App, MenuController } from "ionic-angular";
import { Component, Input } from "@angular/core";

import { AuthService } from "../../providers/auth.service";

import { BaseComponent } from "../base.component";
import { User } from "../../models/user.model";
import { UserProfilePage } from "../../pages/user-profile/user-profile";
import { LisUsuariosPage } from "../../pages/lis-usuarios/lis-usuarios";
import { LisBibliotecaPage } from "../../pages/lis-biblioteca/lis-biblioteca";

@Component({
  selector: "user-menu",
  templateUrl: "user-menu.html"
})
export class UserMenuComponent extends BaseComponent {
  @Input("user") currentUser: User;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onProfile(): void {
    this.navCtrl.push(UserProfilePage);
  }

  onListUsuarios(): void {
    this.navCtrl.push(LisUsuariosPage);
  }

  onListLivros():void{
    this.navCtrl.push(LisBibliotecaPage);
  }
}
