import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPublicacionComponent } from './crear-publicacion.component';

describe('CrearPublicacionComponent', () => {
  let component: CrearPublicacionComponent;
  let fixture: ComponentFixture<CrearPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
