import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Lao'},
    {id: 3, name: 'Campuchia'}
  ];

  contractForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  });

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.contractForm.value);
  }
}
