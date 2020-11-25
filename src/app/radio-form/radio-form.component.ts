import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.css']
})
export class RadioFormComponent implements OnInit {
  isSent:boolean = true;
  urgent:boolean = true;
  passports = [
    111,
    108542,
    2343,
    2885,
    343,
    3210251,
    3215200,
    32165220,
    45466,
    5543,
    67,
    76757657,
    8546756,
    906546
  ]
  res: Array<number>
  inputPassport: number
  passport: number;
  constructor() { }
  

  setSentStatus(value: boolean) {
  
    if(value){
      this.isSent= true;
    } else {
      this.isSent= false;
    }
    
    
  }
  checkForPassport(value){
    if(value){
      this.res = this.passports.filter(x=>{
      
        if(x.toString().startsWith(value)){
          return x
        }
       });

       
    } else {
      this.res = [];
    }
    
  }
  choosePassport(x){
    this.passport = x;
    this.res = [];
  }
  setUrgent(value){
   this.urgent=value;

  }
  ngOnInit(): void {
  }

}
