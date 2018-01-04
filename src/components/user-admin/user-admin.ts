import { AlertController, App, MenuController } from "ionic-angular";
import { Component, Input } from "@angular/core";

import { User } from "../../models/user.model";
import { BaseComponent } from "../base.component";
import { AuthService } from "../../providers/auth.service";
import { CadAgendaPage } from "../../pages/cad-agenda/cad-agenda";
import { CadBibliotecaPage } from "../../pages/cad-biblioteca/cad-biblioteca";

@Component({
  selector: "user-admin",
  templateUrl: "user-admin.html"
})
export class UserAdminComponent extends BaseComponent {
  @Input() user: User;
  @Input() isMenu: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onBiblioteca(): void {
    this.navCtrl.push(CadBibliotecaPage);
  }

  onAgenda(): void {
    this.navCtrl.push(CadAgendaPage);
  }
}
