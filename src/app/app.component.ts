import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';
  password = '';
  //Event-Binding-Syntax
  onButtonClick(){
    //console.log("button is clicked!");
    this.password = "This is my password!";
  }
  //Property-Binding-Syntax
  getPassword(){
    return this.password;
    //we can use this method instead of property inside the value of input
  }
}
