import { Component} from '@angular/core';

@Component({
  selector: 'app-buttonplatform',
  templateUrl: './buttonplatform.component.html',
  styleUrls: ['./buttonplatform.component.css']
})
export class ButtonplatformComponent{

  smallButton = 'button is-warning p-4 smallButton';
  mediumButton = 'button is-warning p-4 mediumButton';
  largeButton = 'button is-warning p-4 largeButton';
  disabledTrue = true;
  disabledFalse = false
  sbText = 'Small';
  mbText = 'Medium';
  lbText = 'Large';
  color: string = '';
 
 
}

