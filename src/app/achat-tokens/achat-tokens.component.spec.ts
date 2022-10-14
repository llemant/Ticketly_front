import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatTokensComponent } from './achat-tokens.component';

describe('AchatTokensComponent', () => {
  let component: AchatTokensComponent;
  let fixture: ComponentFixture<AchatTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatTokensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
