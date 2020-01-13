import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInOutComponent } from './sing-in-out.component';

describe('SingInOutComponent', () => {
  let component: SingInOutComponent;
  let fixture: ComponentFixture<SingInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
