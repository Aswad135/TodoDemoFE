import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListViewComponent} from "./layout/todo-list-view/todo-list-view.component";
import {TodoViewComponent} from "./layout/todo-view/todo-view.component";

const routes: Routes = [
  {
    path: 'list',
    component: TodoListViewComponent
  }, {
    path: 'list/todo',
    component: TodoViewComponent,
  }, {
    path: '*',
    component: TodoListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
