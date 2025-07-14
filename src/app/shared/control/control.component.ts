import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit{
  // @HostBinding('class') className = 'control';
  //@HostListener('click') onClick(){
    //console.log('Clicked!');  
  //}

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  @Input({ required: true }) label!:string;

  constructor () {
    afterRender( () => {
      console.log('afterRender');
      
    });

    afterNextRender(()=> {
      console.log('afterNextRender');
    });
  }

ngAfterContentInit() {
    
}

  onClick() {
    console.log(this.control);
  }
}
