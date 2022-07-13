import {Injectable} from "@angular/core";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HttpService} from "./http.service";
import {TodoModel} from "../models/todo.model";
import {TodoListModel} from "../models/todo-list.model";

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

  createNewTodo(todo: TodoListModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.post(this.apiUrl + 'todoList/list', todo, httpOptions)
  }

  updateTodoStatus(todo: TodoModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.put(this.apiUrl + 'todo', [todo], httpOptions)
  }

  deleteTodo(todo: number | undefined) {
    if (todo == undefined)
      return null;
    const params = new HttpParams().append('id', todo);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpService.get(this.apiUrl + 'todo/delete', params, httpOptions)
  }
}
