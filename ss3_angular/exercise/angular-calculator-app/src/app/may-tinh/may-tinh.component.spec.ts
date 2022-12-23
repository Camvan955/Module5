import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayTinhComponent } from './may-tinh.component';

describe('MayTinhComponent', () => {
  let component: MayTinhComponent;
  let fixture: ComponentFixture<MayTinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayTinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayTinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
