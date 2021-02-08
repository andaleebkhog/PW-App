import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  
  //Event-Binding-Syntax
  onButtonClick(){
    //console.log("button is clicked!");
    this.password = "This is my password!";
    // console.log(this.includeLetters);
    // console.log(this.includeNumbers);
    // console.log(this.includeSymbols);

    console.log(`
    About to generate a password with the following:
    Includes letters: ${this.includeLetters};
    Includes Numbers: ${this.includeNumbers};
    Includes Symbols: ${this.includeSymbols};
    `);
    
    
    
  }
  //Property-Binding-Syntax
  getPassword(){
    return this.password;
    //we can use this method instead of property inside the value of input
  }

  //Interpolation-Example ;) {{interpolationExamp}} or {{password}} anywhere in the html will work
  interpolationExmp(){
    return 'Hello from interpolation';
  }

  //tracking input state
  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: any){
    const parsedValue = parseInt(value.target.value);
    //console.log(value.target.value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }      

    console.log(this.length);
    
  }
}
