import { Component, ContentChild, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [], 
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class : 'control'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  //@HostListener('click') onClick(){
    //console.log('Clicked!');  
  //}

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  @Input({ required: true }) label!:string;

  onClick() {
    console.log(this.control);
  }
}
