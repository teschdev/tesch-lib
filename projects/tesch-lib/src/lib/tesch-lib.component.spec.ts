import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeschLibComponent } from './tesch-lib.component';

describe('TeschLibComponent', () => {
  let component: TeschLibComponent;
  let fixture: ComponentFixture<TeschLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeschLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeschLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
