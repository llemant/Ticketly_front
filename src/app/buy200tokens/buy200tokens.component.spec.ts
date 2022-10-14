import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy200tokensComponent } from './buy200tokens.component';

describe('Buy200tokensComponent', () => {
  let component: Buy200tokensComponent;
  let fixture: ComponentFixture<Buy200tokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buy200tokensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buy200tokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
