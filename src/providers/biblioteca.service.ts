import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { BaseService } from "./base.service";
import { Biblioteca } from "../models/biblioteca.model";

@Injectable()
export class BibliotecaService extends BaseService {
  livros: FirebaseListObservable<Biblioteca[]>;

  constructor(public af: AngularFire, public http: Http) {
    super();
    this.livros = this.af.database.list(`/biblioteca`);
  }

  create(biblioteca: Biblioteca): firebase.Promise<void> {
    // Caminho onde será gravado no banco de dados
    return this.livros.push(biblioteca).catch(this.handlePromiseError);
  }
}
