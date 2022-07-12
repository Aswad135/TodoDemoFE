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
  todoList: TodoListModel = {ListOfTodos: [], id: 0, listHash: "", title: ""};
  dataSource: TodoModel[] = [];
  displayedColumns: string[] = ['id', 'contents', 'createdOn', 'modifiedOn'];
  temp: any;

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

  }

  removeTodo() {

  }

  copyCode() {
    this.clipboardApi.copyFromContent(this.todoList.listHash);
    this.snackBar.open('Sharable Code Copied to Clipboard', 'Close', {
      duration: 2000
    })
  }

  private loadData(listHash: string) {
    this.apiService.getTodoOfList(listHash).subscribe(value => {
      this.todoList = value;
      this.dataSource = this.todoList.ListOfTodos;
    })
  }
}
