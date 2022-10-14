import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy100tokensComponent } from './buy100tokens.component';

describe('Buy100tokensComponent', () => {
  let component: Buy100tokensComponent;
  let fixture: ComponentFixture<Buy100tokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buy100tokensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buy100tokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
