import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesticketspassesComponent } from './mesticketspasses.component';

describe('MesticketspassesComponent', () => {
  let component: MesticketspassesComponent;
  let fixture: ComponentFixture<MesticketspassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesticketspassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesticketspassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
