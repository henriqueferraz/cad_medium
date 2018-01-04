import { Component } from "@angular/core";
import { FirebaseListObservable } from "angularfire2";
import { MenuController, NavController, NavParams } from 'ionic-angular';

import { AuthService } from "../../providers/auth.service";
import { Biblioteca } from "../../models/biblioteca.model";
import { BibliotecaService } from "../../providers/biblioteca.service";

@Component({
  selector: "page-lis-biblioteca",
  templateUrl: "lis-biblioteca.html"
})
export class LisBibliotecaPage {
  livros: FirebaseListObservable<Biblioteca[]>;

  constructor(
    public authService: AuthService,
    public bibliotecaService: BibliotecaService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(true, "user-menu");
    this.livros = this.bibliotecaService.livros;
    console.log(this.livros);
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.autenticado;
  }
}
