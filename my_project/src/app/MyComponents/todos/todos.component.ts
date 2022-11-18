import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Toda';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


todoItem:string = ''
todoItemArray: any[] = []
todoObj: any = {
  todoItem: '',
  color:''
}



  
  constructor() { 

  }

  ngOnInit(): void {
    const localData =localStorage.getItem("todoList")
    if(localData != null){
      this.todoItemArray = JSON.parse(localData)
    }
  }
 
  onItemAdd(){
   this.todoItemArray.push(this.todoObj)
   localStorage.setItem("todoList",JSON.stringify(this.todoItemArray))
   this.todoObj={
    todoItem: '',
    color:''
  }
  }


}
