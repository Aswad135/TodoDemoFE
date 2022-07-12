import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {TodoListModel} from "../../models/todo-list.model";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.scss']
})
export class TodoListViewComponent implements OnInit {

  datasource: TodoListModel[] = [];
  displayedColumns: string[] = ['id', 'title', 'listHash'];
  dataToDisplay = [...this.datasource];

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  addData() {

  }

  removeData() {

  }

  openDetailsForList(listHash: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        listHash: listHash
      }
    }
    this.router.navigate(['list/todo'], navigationExtras)
  }

  private loadData() {
    this.apiService.getTodoLists().subscribe(value => {
      this.datasource = value;
      console.log(value);
    })
  }
}
