import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { IStep } from './goals.interface';

@Directive({
  selector: '[appProgressbarGoal]'
})
export class ProgressbarGoalDirective {
  @Input('appProgressbarGoal') steps!:IStep[];
  @HostBinding('style.width') elementClass ="0%"
  @HostBinding('innerHtml') element = "0%"
  constructor() { }
  ngOnInit(): void {
    if(this.steps){
      if(this.steps.length > 0){
    const numOfsteps = this.steps.length
    const numOfComplete = this.steps.filter((elem)=> elem.status ==="completed").length 
    const percentage = (numOfComplete / numOfsteps)*100
    this.elementClass = percentage + "%"
    this.element = Math.floor(percentage) + "%";
   
    }
    }
    
   
  }

}
