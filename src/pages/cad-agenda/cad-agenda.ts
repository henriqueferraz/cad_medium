import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { HomePage } from '../home/home';

import { AuthService } from '../../providers/auth.service';
import { AgendaService } from '../../providers/agenda.service';

@Component({
  selector: "page-cad-agenda",
  templateUrl: "cad-agenda.html"
})
export class CadAgendaPage {
  signupForm: FormGroup;
  constructor(
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public agendaService: AgendaService
  ) {
    this.signupForm = this.formBuilder.group({
      ag_calendario: ["", [Validators.required]],
      ag_evento: ["", [Validators.required, Validators.minLength(3)]],
      ag_horario: ["", [Validators.required]],
      ag_local: ["", [Validators.required, Validators.minLength(3)]],
      ag_tipo: ["", [Validators.required]],
      ag_preceito: ["", [Validators.required]],
      ag_observacao: ["", [Validators.minLength(3)]]
    });
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.autenticado;
  }

  onSubmit(): void {
    this.agendaService.create(this.signupForm.value).then(() => {
      this.navCtrl.setRoot(HomePage);
    });
  }
}
