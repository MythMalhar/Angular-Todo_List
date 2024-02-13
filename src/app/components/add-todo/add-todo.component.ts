import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title:String ="";
  desc:String = "";
  onSubmit(){
    console.log("Submited!!");
  }
}
