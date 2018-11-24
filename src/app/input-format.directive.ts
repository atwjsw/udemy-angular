import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: string;

  @HostListener('focus') onFocus() {
    console.log('focus');
  }

  @HostListener('blur') onBlur() {
    console.log('blur');
    let value: string = this.el.nativeElement.value;
    if (this.format === 'uppercase') 
      this.el.nativeElement.value = value.toUpperCase();
    else 
      this.el.nativeElement.value = value.toLowerCase();
  }

  constructor(private el: ElementRef) {
    
   }
 
}
