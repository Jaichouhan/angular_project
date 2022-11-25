import { Component, OnInit } from '@angular/core';
import { AllAPiService } from 'src/services/all-api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {


  apiResponse:any;
  constructor(public __getApi:AllAPiService) {
    
    this.__getApi.GetData().then((response:any)=>{
      this.apiResponse=response.data.result
    })
   }

  ngOnInit(): void {
  }

}
