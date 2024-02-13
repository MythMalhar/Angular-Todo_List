import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos:Todo[];
  constructor(){
    this.todos=[
      {
        sno:1,
        title:"ABC",
        desc:"This description!!!!",
        active: true
      },
      {
        sno:2,
        title:"DEF",
        desc:"This description!!!!",
        active: true
      },
      {
        sno:3,
        title:"HIJ",
        desc:"This description!!!!",
        active: true
      }
    ]
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log(todo);  
  }
}
