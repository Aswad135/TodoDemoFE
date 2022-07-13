import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {TodoModel} from "../../models/todo.model";
import {ActivatedRoute} from "@angular/router";
import {TodoListModel} from "../../models/todo-list.model";
import {ClipboardService} from "ngx-clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
  providers: [MatSnackBar, Overlay]
})
export class TodoViewComponent implements OnInit, OnDestroy {

  listHash: string = '';
  todoList: TodoListModel = {listOfTodos: [], id: 0, listHash: "", title: ""};
  dataSource: TodoModel[] = [];
  displayedColumns: string[] = ['id', 'checked', 'contents', 'createdOn', 'modifiedOn'];
  temp: any;
  newTodo: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService, private clipboardApi: ClipboardService, private snackBar: MatSnackBar) {
    this.temp = this.route.queryParams.subscribe(params => {
      this.listHash = params['listHash'];
    });
  }

  ngOnDestroy(): void {
    this.temp.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData(this.listHash);
  }


  addTodo() {
    if (this.newTodo != '' && this.todoList.listOfTodos)
      this.todoList.listOfTodos.push({
        contents: this.newTodo,
        isDone: false
      })
    this.apiService.createNewTodo(this.todoList).subscribe(value => {
      this.todoList = value;
      this.dataSource = this.todoList ? this.todoList.listOfTodos ? this.todoList.listOfTodos : [] : [];
      this.newTodo = '';
    })
  }

  removeTodo() {
    let checkedSources = this.dataSource.filter(value => value.isDone);
    checkedSources.forEach(x => {
      // @ts-ignore
      this.apiService.deleteTodo(x.id).subscribe(res => {
        if (res)
          this.dataSource = this.dataSource.filter(x => x.id == x.id);
      })
    })
    this.loadData(this.listHash);
  }

  copyCode() {
    if (this.todoList.listHash != null) {
      this.clipboardApi.copyFromContent(this.todoList.listHash);
    }
    this.snackBar.open('Sharable Code Copied to Clipboard', 'Close', {
      duration: 2000
    })
  }

  private loadData(listHash: string) {
    this.apiService.getTodoOfList(listHash).subscribe(value => {
      this.todoList = value;
      this.dataSource = this.todoList.listOfTodos ? this.todoList.listOfTodos : [];
    })
  }
}
