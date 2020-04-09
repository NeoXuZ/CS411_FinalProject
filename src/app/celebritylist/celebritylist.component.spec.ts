import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritylistComponent } from './celebritylist.component';

describe('CelebritylistComponent', () => {
  let component: CelebritylistComponent;
  let fixture: ComponentFixture<CelebritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
