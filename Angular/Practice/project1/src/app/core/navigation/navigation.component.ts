import { Component,OnInit,OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy{

  private routerSubscription:Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        const checkbox = document.getElementById('openmenu') as HTMLInputElement;
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      }
    })
  }
  ngOnDestroy(): void {
    if(this.routerSubscription){
      this.routerSubscription.unsubscribe();
    }
  }

}
