import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://i.pinimg.com/originals/80/d3/64/80d364e09d31fcba8af274926d4332ff.jpg'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
