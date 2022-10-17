import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycustomtokensComponent } from './buycustomtokens.component';

describe('BuycustomtokensComponent', () => {
  let component: BuycustomtokensComponent;
  let fixture: ComponentFixture<BuycustomtokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycustomtokensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuycustomtokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
