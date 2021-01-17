import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { todo } from './todoModel';

@Component({
  selector: 'app-navigate',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class NavigateComponent implements OnInit {

  todos: todo[] = [];
  // httpClient!: HttpClient;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
  }
  
  getTodos() {
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe(
      response  => {
        this.todos = response;
      }
    );
  }

  showTodo(id: number) {
    this.todos.map((todo, index) => {
      if(index == id) todo.display = !todo.display;
      return todo;
    })
  }

}
