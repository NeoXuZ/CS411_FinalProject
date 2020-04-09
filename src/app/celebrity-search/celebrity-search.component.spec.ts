import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritySearchComponent } from './celebrity-search.component';

describe('CelebritySearchComponent', () => {
  let component: CelebritySearchComponent;
  let fixture: ComponentFixture<CelebritySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebritySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
