import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesevenementspassesComponent } from './mesevenementspasses.component';

describe('MesevenementspassesComponent', () => {
  let component: MesevenementspassesComponent;
  let fixture: ComponentFixture<MesevenementspassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesevenementspassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesevenementspassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
