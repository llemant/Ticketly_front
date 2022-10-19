import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesevenementsComponent } from './mesevenements.component';

describe('MesevenementsComponent', () => {
  let component: MesevenementsComponent;
  let fixture: ComponentFixture<MesevenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesevenementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesevenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
