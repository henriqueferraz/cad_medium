import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { HomePage } from "../home/home";

import { AuthService } from "../../providers/auth.service";
import { BibliotecaService } from "../../providers/biblioteca.service";

@Component({
  selector: "page-cad-biblioteca",
  templateUrl: "cad-biblioteca.html"
})
export class CadBibliotecaPage {
  signupForm: FormGroup;
  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public bibliotecaService: BibliotecaService
  ) {
    this.signupForm = this.formBuilder.group({
      bibli_nome: ["", [Validators.required]],
      bibli_author: ["", [Validators.required]],
      bibli_editora: ["", [Validators.required]],
      bibli_catalogo: ["", [Validators.required]],
      bibli_numero: ["", [Validators.required]],
      bibli_restricao: ["", [Validators.required]],
      bibli_observacao: [""]
    });
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.autenticado;
  }

  onSubmit(): void {
    this.bibliotecaService.create(this.signupForm.value).then(() => {
      this.navCtrl.setRoot(HomePage);
    });
  }
}
