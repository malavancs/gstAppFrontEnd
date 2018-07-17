import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultDialogComponent } from './searchresult-dialog.component';

describe('SearchresultDialogComponent', () => {
  let component: SearchresultDialogComponent;
  let fixture: ComponentFixture<SearchresultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
