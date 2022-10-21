import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgInfoComponent } from './msg-info.component';

describe('MsgInfoComponent', () => {
  let component: MsgInfoComponent;
  let fixture: ComponentFixture<MsgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
