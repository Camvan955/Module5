import {Component, OnInit, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {IratingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<IratingUnit> = [];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  // tslint:disable-next-line:typedef
  calculate(max: number, ratingValue: number) {
    // @ts-ignore
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  // tslint:disable-next-line:typedef
  select(index: number) {
    this.ratingValue = index + 1;
    // @ts-ignore
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }
  // tslint:disable-next-line:typedef
  enter(index: number) {
    // @ts-ignore
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  // tslint:disable-next-line:typedef
  reset() {
    // @ts-ignore
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
