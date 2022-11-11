import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-restaurentdash',
  templateUrl: './restaurentdash.component.html',
  styleUrls: ['./restaurentdash.component.css']
})
export class RestaurentdashComponent implements OnInit {

  formValue!:FormGroup

  constructor(formBuilder:FormBuilder) { }
  

  ngOnInit(): void {
//     this.formValue = this.formBuilder.group({
// name:[''],
// email:[''],
// mobile:[''],
// address:[''],
// services:[''],
//     })
  }

}
