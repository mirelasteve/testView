import { Component,} from '@angular/core';

@Component({
  selector: 'app-customer-details',
  template: `<app-host  
    [firstName]="firstName"
    [lastName]="lastName"
    [list]=list
    [suggestions]=suggestions
    [phone]=phone
    [mail]=mail
    >
    </app-host>
  `
})

export class CustomerDetailsComponent  {
  firstName = 'Maria';
  lastName='Keys';
  list = [
    'Explore global IoT connectivity',
    'Research IoT management platforms',
    'Find the best solutions',
    'Listen to seminars'
  ];
  suggestions = [
    'https://cdn.pixabay.com/photo/2020/02/03/20/49/technology-4816658__480.jpg',
    'https://cdn.pixabay.com/photo/2020/04/17/13/06/video-5055130__480.jpg',
    'https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536__480.png',
    'https://cdn.pixabay.com/photo/2020/06/03/14/54/iot-5255205__480.png',
    'https://cdn.pixabay.com/photo/2019/10/17/09/05/network-4556384__480.jpg',
    'https://media.istockphoto.com/photos/spare-part-delivery-drone-at-garage-storage-in-leading-automotive-car-picture-id1176581529',
    'https://media.istockphoto.com/photos/smart-home-control-in-scandinavian-home-interior-picture-id1175670330?b=1&k=6&m=1175670330&s=170667a&w=0&h=nxQOWfXSC-ct-56yilwibaaQby3B3rtSGReiKXtc66I=',
    'https://cdn.pixabay.com/photo/2018/11/28/10/45/cloud-3843352__480.jpg',
    'https://cdn.pixabay.com/photo/2020/10/11/17/19/icon-5646460__480.jpg',
    'https://cdn.pixabay.com/photo/2014/08/21/21/45/space-station-423702__480.jpg',
    'https://cdn.pixabay.com/photo/2020/05/05/05/32/concept-5131525__480.jpg',
    'https://cdn.pixabay.com/photo/2014/08/14/10/38/software-417880__480.jpg'
];
phone ='7847593948';
mail='maria.keys@mail.io'
 


}
