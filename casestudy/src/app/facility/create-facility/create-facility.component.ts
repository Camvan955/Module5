import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RenType} from '../ren-type';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createFacilityForm :FormGroup;
  renTypeList= [
    {id: 1, name: "theo ngày"},
    {id: 2, name: "theo tuần"},
    {id: 3, name: "theo tháng"},
    {id: 4, name: "theo giờ"},
  ]
  constructor() {
    this.createFacilityForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('DV-[0-9]{4}')]),
      name: new FormControl('',[Validators.required,Validators.pattern("([A-Z][a-z]+[ ])+([A-Z][a-z]+)")]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfFloor: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required]),
      renType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  saveFacility(){
    console.log(this.createFacilityForm.value);
  }

}
