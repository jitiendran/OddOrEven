import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberList:number[] = []
  title = 'odd-even-game';
  addNumbers(data:number){
    this.numberList.push(data)
  }
  reseted(data:number){
    if(data === 1){
      this.numberList.length = 0
    }
  }
}
