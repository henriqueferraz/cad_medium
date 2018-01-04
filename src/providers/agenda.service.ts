import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { Agenda } from "../models/agenda.model";
import { BaseService } from "./base.service";

// Classe de serviços do usuário

@Injectable()
export class AgendaService extends BaseService {
  eventos: FirebaseListObservable<Agenda[]>;

  constructor(public af: AngularFire, public http: Http) {
    super();
    this.eventos = this.af.database.list(`/agendas`);
  }

  create(agenda: Agenda): firebase.Promise<void> {
    // Caminho onde será gravado no banco de dados
    return this.eventos.push(agenda).catch(this.handlePromiseError);
  }
}
