import {TodoModel} from "./todo.model";

export interface TodoListModel{
  id?:number,
  title: string,
  listHash?: string;
  listOfTodos?: TodoModel[];

}
