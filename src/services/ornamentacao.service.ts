import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Ornamentacao } from "../model/ornamentacao";

@Injectable()
export class OrnamentacaoService{

  static getOrnamentacao(): any {
    throw new Error("Method not implemented.");
  }
    constructor(private http: HttpClient) {}

    getOrnamentacao() : Observable<Ornamentacao[]>{
        return this.http.get<Ornamentacao[]>(
            'http://www.mocky.io/v2/5c3d5b303200005100b939d4');
    }
}