import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-evento",
  templateUrl: "evento.html"
})
export class EventoPage {
  public evento_pass;

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.evento_pass = navParams.get("evento_env");
  }
}
