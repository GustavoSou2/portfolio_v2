import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[truncate]'
})
export class TruncateDirective {
  @Input() truncate: number = 25;
  private originalText!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.el.nativeElement.innerText.length > this.truncate) {
      this.originalText = this.el.nativeElement.innerText;
      const truncatedText = this.originalText.substring(0, this.truncate) + '...';
      this.renderer.setProperty(this.el.nativeElement, 'innerText', truncatedText);
      this.renderer.setAttribute(this.el.nativeElement, 'title', this.originalText);
    }
  }
}
