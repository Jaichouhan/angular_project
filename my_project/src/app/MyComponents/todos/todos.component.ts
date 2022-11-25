import { Component, OnInit } from '@angular/core';

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
local:any;
  constructor() { 

  }

  ngOnInit(): void {
    const localData =localStorage.getItem("todoList")
    if(localData != null){
      this.todoItemArray = JSON.parse(localData)
    }
  }
 
  onItemAdd(){
    if(!this.todoObj.todoItem){
      alert("please enter a todo name")
    }else if(!this.todoObj.color){
      alert("please select a color name")
    }else{
      this.todoItemArray.push(this.todoObj)
      localStorage.setItem("todoList",JSON.stringify(this.todoItemArray))
      this.todoObj={
       todoItem: '',
       color:''
     }
    }
  
  }

  deleteTodo(index:any){
    this.todoItemArray.splice(index,1)
    localStorage.setItem("todoList",JSON.stringify(this.todoItemArray))
    
    

  }
}
