import { Component } from '@angular/core';
// import {angularFireModule} from "@angular/fire/compat"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_project';
  constructor(){
    setTimeout(() => {
      this.title = "change title"
    }, 1000);
  }
}
