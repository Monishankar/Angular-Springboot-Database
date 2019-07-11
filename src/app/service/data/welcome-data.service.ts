import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor (public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldService(){
    return this.http.get('rest');
    // console.log("Hello welcome data service");
  }
  
  executeHelloWorldServiceWithPAthVariable(name){
    console.log("Hello welcome to data service");

    let basicAuthHeaderString = this.createBasicAuthenicationHeader();
    let headers = new HttpHeaders ({
    Authorization: basicAuthHeaderString });
    
    return this.http.get<HelloWorldBean>(
    `http://localhost:8080/hello-world/path-variable/${name}`,
    {headers});
  }
  
  createBasicAuthenicationHeader(){
    let username='MSD'
    let password ='dummy'
    let basicAuthHeaderString ='Basic '+ username + ':' + password;
    return basicAuthHeaderString;
  }
 

}
