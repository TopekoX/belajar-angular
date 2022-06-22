import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenapComponent } from './genap.component';

describe('GenapComponent', () => {
  let component: GenapComponent;
  let fixture: ComponentFixture<GenapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
