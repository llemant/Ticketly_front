import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandeAmisComponent } from './mes-demande-amis.component';

describe('MesDemandeAmisComponent', () => {
  let component: MesDemandeAmisComponent;
  let fixture: ComponentFixture<MesDemandeAmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDemandeAmisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesDemandeAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
