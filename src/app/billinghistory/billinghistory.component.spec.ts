import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinghistoryComponent } from './billinghistory.component';

describe('BillinghistoryComponent', () => {
  let component: BillinghistoryComponent;
  let fixture: ComponentFixture<BillinghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillinghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
