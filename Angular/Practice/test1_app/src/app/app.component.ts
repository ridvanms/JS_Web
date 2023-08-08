import { Component } from '@angular/core';
import {Store, select} from "@ngrx/store"
import { increment,decrement,reset } from './State/counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$ = this.store.select((state:any)=>state.counter.counter)

  constructor(private store:Store){}

  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
