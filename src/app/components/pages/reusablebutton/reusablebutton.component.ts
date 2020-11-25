import { Component, Input,  Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-reusablebutton',
  templateUrl: './reusablebutton.component.html',
  styleUrls: ['./reusablebutton.component.css']
})
export class ReusablebuttonComponent  {


  smallButton = 'button is-warning hoE smallButton';
  mediumButton = 'button is-warning hoE mediumButton';
  largeButton = 'button is-warning hoE largeButton';
  

  @Input('styled') styled: string;
  @Input('text') text: string; 
  @Input('disabled') disabled: boolean;

 
}
