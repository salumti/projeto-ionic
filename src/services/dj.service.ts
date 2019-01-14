import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Dj } from "../model/dj";

@Injectable()
export class DjService{

    constructor(private http: HttpClient) {}

    getDj() : Observable<Dj[]>{
        return this.http.get<Dj[]>(
            'http://www.mocky.io/v2/5c3bf5c63100002d00a1a141');
    }
}