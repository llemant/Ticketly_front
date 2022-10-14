import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy10tokensComponent } from './buy10tokens.component';

describe('Buy10tokensComponent', () => {
  let component: Buy10tokensComponent;
  let fixture: ComponentFixture<Buy10tokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buy10tokensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buy10tokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
