import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message ='Some welcome message'
  name= ''
  welcomeMessageFromService :String

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService : WelcomeDataService
    ) { }

  ngOnInit() {
    // console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
   this.name=this.route.snapshot.params['name'];
  }

  getWelocmeMessage(){
    //console.log(this.welcomeDataService.executeHelloWorldService());
    this.welcomeDataService.executeHelloWorldService().subscribe(
      response =>this.handleSuccessfulResponse(response),
      error =>this.handleErrorResponse(error)
    );
    //console.log("Get welcome message");
  }
  
 handleSuccessfulResponse(response){
  this.welcomeMessageFromService =response.message;
  // console.log(response.message);
 }



 getWelocmeMessageWithParameter(){
  //console.log(this.welcomeDataService.executeHelloWorldService());
  this.welcomeDataService.executeHelloWorldServiceWithPAthVariable(this.name).subscribe(
    response =>this.handleSuccessfulResponse(response),
    error =>this.handleErrorResponse(error)
  );
  //console.log("Get welcome message");
}
 


 handleErrorResponse(error) {
  //  console.log(error);
  //  console.log(error.error);
  //  console.log(error.error.message);
this.welcomeMessageFromService=error.error.message
}
}
