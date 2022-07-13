import {Injectable} from "@angular/core";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HttpService} from "./http.service";
import {TodoModel} from "../models/todo.model";

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

  createNewTodo(todo: TodoModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.post(this.apiUrl + 'todo', todo, httpOptions)
  }

  updateTodoStatus(todo: TodoModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.put(this.apiUrl + 'todo', [todo], httpOptions)
  }

  deleteTodo(todo: TodoModel) {
    return this.httpService.delete(this.apiUrl + 'todo/delete/', todo.id)
  }
}
