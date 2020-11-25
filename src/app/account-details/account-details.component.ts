import { Component} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-details',
  template: `<app-host 
      [passportNumber]="passportNumber"
      [avatar]="avatar"
      [tableData]="tableData"
      >
      </app-host>
`
})
export class AccountDetailsComponent extends Component {
  passportNumber = '5400004320';
  avatar = 'https://www.w3schools.com/w3images/avatar6.png';
  tableData = [
    {
      currency:'fa fa-dollar',
      amount:21110,
      date:new Date()
    },
    {
      currency:'fa fa-euro',
      amount:32220,
      date:new Date()
    },
    {
      currency:'fa fa-gbp',
      amount:456560,
      date:new Date()
    },
    {
      currency:'fa fa-jpy',
      amount:60000,
      date:new Date()
    }
  ]
}
