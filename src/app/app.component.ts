import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Musicaffiene';

  count = 0;

  number1 = 1;
  number2 = 2;
  result = 0;


  listofnumbers = [1,23,45,576,3];

  listofnames = ["avi","arka","pri","ankur","muski"];

  increment = () => {
    this.count++;
  }

  
  decrement = () => {
    this.count--;
  }

  Add = () => {
    this.result=this.number1+this.number2;
  }
}
