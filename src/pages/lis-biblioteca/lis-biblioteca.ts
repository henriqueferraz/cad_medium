import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FirebaseListObservable } from "angularfire2";
import { Biblioteca } from "../../models/biblioteca.model";
import { BibliotecaService } from "../../providers/biblioteca.service";

@Component({
  selector: "page-lis-biblioteca",
  templateUrl: "lis-biblioteca.html"
})
export class LisBibliotecaPage {
  livros: FirebaseListObservable<Biblioteca[]>;

  constructor(
    public bibliotecaService: BibliotecaService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.livros = this.bibliotecaService.livros;
    console.log("ionViewDidLoad LisBibliotecaPage");
    console.log(this.livros);
  }
}
