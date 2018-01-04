import { Component } from "@angular/core";
import { FirebaseListObservable } from "angularfire2";
import { MenuController, NavController } from "ionic-angular";

import { Agenda } from "../../models/agenda.model";
import { AgendaService } from "../../providers/agenda.service";
import { AuthService } from "../../providers/auth.service";

// Páginas
import { SignupPage } from "../signup/signup";
import { EventoPage } from "../evento/evento";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  eventos: FirebaseListObservable<Agenda[]>;

  constructor(
    public authService: AuthService,
    public agendaService: AgendaService,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {}

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.autenticado;
  }

  ionViewDidLoad() {
    this.eventos = this.agendaService.eventos;

    this.menuCtrl.enable(true, "user-menu");
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  onEventos(evento: Agenda): void {
    this.navCtrl.push(EventoPage, {
      evento_env: evento
    });
  }
}
