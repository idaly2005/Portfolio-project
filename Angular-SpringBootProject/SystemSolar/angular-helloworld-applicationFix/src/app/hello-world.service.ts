import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor( private httpClient: HttpClient) { }

  executeHelloWorldService(){
   // return this.http.get<Message>('http://localhost:8080/hello-world/api/v1/greeting'); 
   return this.httpClient.get<Message>('http://localhost:8080/greeting?name=Ana Maria and Susana');
  }
}

 
