import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCompteOrgaComponent } from './modif-compte-orga.component';

describe('ModifCompteOrgaComponent', () => {
  let component: ModifCompteOrgaComponent;
  let fixture: ComponentFixture<ModifCompteOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCompteOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCompteOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
