import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CommonServiceComponent{

    constructor(private _http: HttpClient){}

    getCommonJson = function(){
        return this._http.get('../assets/resources/common.json');
    }
}