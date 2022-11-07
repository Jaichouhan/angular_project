import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-demo]',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  status = "hiii";
  numbers = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
