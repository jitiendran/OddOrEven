import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output('number') n:EventEmitter<number> = new EventEmitter()
  @Output('reset') reseted:EventEmitter<number> = new EventEmitter()
  n1:number = 0
  constructor() { }
  interval:any;

  ngOnInit(): void {
  }
  startGame(){
    this.interval = setInterval(()=>{
      this.n.emit(this.n1++)
    },1000)
    console.log(typeof(this.interval))
  }
  pauseGame(){
    clearInterval(this.interval)
  }
  resetGame(){
    this.n1 = 0
    this.reseted.emit(1)
  }

}
