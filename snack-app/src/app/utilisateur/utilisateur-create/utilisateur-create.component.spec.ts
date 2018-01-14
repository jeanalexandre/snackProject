import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurCreateComponent } from './utilisateur-create.component';

describe('UtilisateurCreateComponent', () => {
  let component: UtilisateurCreateComponent;
  let fixture: ComponentFixture<UtilisateurCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
