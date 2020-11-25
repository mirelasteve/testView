import { Component,Input } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import 'bulma'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input('displayElement') displayElement : string;
}
