import { FirebaseListObservable } from "angularfire2";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { AuthService } from '../../providers/auth.service';
import { User } from "../../models/user.model";
import { UserService } from "../../providers/user.service";

@Component({
  selector: "page-lis-usuarios",
  templateUrl: "lis-usuarios.html"
})
export class LisUsuariosPage {
  users: FirebaseListObservable<User[]>;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.autenticado;
  }

  ionViewDidLoad() {
    this.users = this.userService.users
  }
}
