import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;//"http://localhost:9090/dsp-service/v2/";

  constructor(private httpService: HttpService) {
  }

  getTodoLists() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.get(this.apiUrl + 'todoList/list', [], httpOptions)
  }

  getTodoOfList(listHash: string) {
    const params = new HttpParams().append('listHash', listHash);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.get(this.apiUrl + 'todoList/listHash', params, httpOptions)
  }
}
