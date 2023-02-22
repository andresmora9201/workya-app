import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRq, RegisterRs} from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {    
  }
  
  create(user: RegisterRq) {
    return this.http.post<RegisterRs>('',user);  
  }
}
