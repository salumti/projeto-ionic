import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Mc } from "../model/mestre-de-cerimonias";

@Injectable()
export class McService{

  static getMc(): any {
    throw new Error("Method not implemented.");
  }
    constructor(private http: HttpClient) {}

    getMc() : Observable<Mc[]>{
        return this.http.get<Mc[]>(
            'http://www.mocky.io/v2/5c3d5b303200005100b939d4');
    }
}