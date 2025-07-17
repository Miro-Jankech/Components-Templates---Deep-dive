import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{
  @ViewChild ('form') form?: ElementRef<HTMLFormElement>;
  //@Output() add = new EventEmitter{title: string; request:string};
  enteredTitle = '';
  enteredText ='';
  add = output<{title: string; request:string}>()
  ngOnInit(): void {
      console.log("ON INIT");
      console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
      console.log("AFTER VIEW INIT");
      console.log(this.form?.nativeElement);
      
      
  }
  onSubmit() {
    this.add.emit({title: this.enteredTitle, request: this.enteredText })
    this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText ='';
  }
}

