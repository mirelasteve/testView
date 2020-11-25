import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls:[
    '../../../node_modules/bulma-extensions/bulma-switch/dist/css/bulma-switch.min.css',
    './host.component.css'

]
 
})
export class HostComponent   {

  constructor(public router: Router) {

  }
 
  mailNotification = true;
  desktopNotification = true;
  phoneNotification = true;
  userEmail = '';
  isEmailValid = false;
 
  
  @Input('firstName') firstName: string;
  @Input('lastName') lastName: string;
  @Input('phone') phone: string;
  @Input('mail') mail: string;
  @Input('passportNumber') passport: number;
  @Input('avatar') avatar: string;
  @Input('list') list: Array<string>;
  @Input('tableData') tableData:Array<{currency: string,amount:number,date:Date}>
  @Input('suggestions') suggestions: Array<string>;

  

  setMailNotificiation(){

    this.mailNotification = !this.mailNotification
  }

  setDesktopNotificiation(){

    this.desktopNotification = !this.desktopNotification
  }
  setPhoneNotificiation(){
  
    this.phoneNotification = !this.phoneNotification
  }
  setUserEmail(email){
    
    this.userEmail = email;
    const res = this.validateEmail(email);
    this.isEmailValid = res;
    
  }
  validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase())
  }
}
