import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Buffet } from "../model/buffet";

@Injectable()
export class BuffetService{

  static getBuffet(): any {
    throw new Error("Method not implemented.");
  }
    constructor(private http: HttpClient) {}

    getBuffet() : Observable<Buffet[]>{
        return this.http.get<Buffet[]>(
            'http://www.mocky.io/v2/5c3d4ffb3200009c00b939bd');
    }
}