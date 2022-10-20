import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAmisComponent } from './mes-amis.component';

describe('MesAmisComponent', () => {
  let component: MesAmisComponent;
  let fixture: ComponentFixture<MesAmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesAmisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
