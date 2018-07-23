import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class GroupSearch{
    constructor(private http:Http){}
    
    getData(json:any){
    var params=json;
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.post('http://localhost:3000/login',params,{headers:headers})
    .pipe(map(res=>res.json()));

    }

    getsearchResult(data){
        
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return this.http.post('http://localhost:3000/search',data,{headers:headers})
        .pipe(map((response:Response)=>response.json()))
      }
}