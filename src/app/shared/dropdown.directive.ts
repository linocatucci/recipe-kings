import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // isOpen = false;
  @HostBinding('class.open') isOpen = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  // @HostListener('click') click(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen) {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  //   console.log('click!! :' + this.isOpen);
  // }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

}
