import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPost]'
})
export class PostDirective {

  constructor(public element : ElementRef) {
    element.nativeElement.style.color = 'blue';
  }

}
