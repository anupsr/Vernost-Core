import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetabsComponent } from './sidetabs.component';

describe('SidetabsComponent', () => {
  let component: SidetabsComponent;
  let fixture: ComponentFixture<SidetabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidetabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
