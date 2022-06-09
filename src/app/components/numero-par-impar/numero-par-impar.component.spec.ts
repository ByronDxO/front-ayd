import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroParImparComponent } from './numero-par-impar.component';

describe('NumeroParImparComponent', () => {
  let component: NumeroParImparComponent;
  let fixture: ComponentFixture<NumeroParImparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroParImparComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroParImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
