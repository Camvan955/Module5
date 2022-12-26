import {Component, OnInit} from '@angular/core';
import {Facitily} from '../facitily';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilities: Facitily[] = [
    { image:"https://hoanggiavu.vn/wp-content/uploads/2020/12/mau-villa-dep-nhat-2020-2021-1.jpg",
      id: 1,
      name: 'Villa Beach',
      area: 200,
      numberOfFloor: 4,
      maxPeople: 10,
      cost: 10000000,
      poolArea: 100,
      renType: {id: 2, name: 'ngay', price: 5000000},
      standardRoom: 'abccccc'
    },
    {
      image: "https://furama-booking.com/wp-content/uploads/2021/10/Dat-Phong-Booking-Furama-Resort-Khach-San-Da-Nang-Biet-Thu-Villa-04-Phong-Ngu.jpg",
      id: 2,
      name: 'House Village ',
      area: 100,
      numberOfFloor: 2,
      maxPeople: 7,
      cost: 7000000,
      poolArea: 100,
      renType: {id: 2, name: 'ngay', price: 3000000},
      standardRoom: 'abccccc'
    },
    {image: "https://empire-s3-production.bobvila.com/pages/538/original/Bedroom.jpg?1310503752",
      id: 3,
      name: 'Room Luxury',
      area: 100,
      numberOfFloor: 2,
      maxPeople: 7,
      cost: 4500000,
      poolArea: 100,
      renType: {id: 2, name: 'ngay', price: 3000000},
      standardRoom: 'abccccc'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
