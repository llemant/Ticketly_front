import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesticketsComponent } from './mestickets.component';

describe('MesticketsComponent', () => {
  let component: MesticketsComponent;
  let fixture: ComponentFixture<MesticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
