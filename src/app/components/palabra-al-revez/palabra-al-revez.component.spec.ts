import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraAlRevezComponent } from './palabra-al-revez.component';

describe('PalabraAlRevezComponent', () => {
  let component: PalabraAlRevezComponent;
  let fixture: ComponentFixture<PalabraAlRevezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalabraAlRevezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabraAlRevezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
