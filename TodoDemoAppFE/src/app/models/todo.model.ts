import {TodoListModel} from "./todo-list.model";

export interface TodoModel {
  id?: number,
  contents: string,
  isDone: boolean,
  createdOn?: Date,
  modifiedOn?: Date,
}
