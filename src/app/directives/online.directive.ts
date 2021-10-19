import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appOnline]'
})
export class OnlineDirective {
  @Input() isOnline: boolean = false;

  constructor(private elementRef: ElementRef) {
    if(this.isOnline==true) {
      this.elementRef.nativeElement.style.backgroundColor = "green";
    }else {
      this.elementRef.nativeElement.style.backgroundColor = "red";
    }
  }

}
