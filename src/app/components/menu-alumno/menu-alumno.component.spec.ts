import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlumnoComponent } from './menu-alumno.component';

describe('MenuAlumnoComponent', () => {
  let component: MenuAlumnoComponent;
  let fixture: ComponentFixture<MenuAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
