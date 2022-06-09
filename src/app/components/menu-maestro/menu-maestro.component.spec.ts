import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaestroComponent } from './menu-maestro.component';

describe('MenuMaestroComponent', () => {
  let component: MenuMaestroComponent;
  let fixture: ComponentFixture<MenuMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
