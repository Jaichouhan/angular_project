import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AllAPiService {

  baseUrl:string = 'https://fantasy.rgisports.com/repos/triunfador/api/auth';

  constructor() { }

  GetData(){
    return axios.get(`${this.baseUrl}/fetch-sports`);
  }
}
