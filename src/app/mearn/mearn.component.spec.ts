import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MearnComponent } from './mearn.component';

describe('MearnComponent', () => {
  let component: MearnComponent;
  let fixture: ComponentFixture<MearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
