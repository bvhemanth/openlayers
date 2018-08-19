import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsexampleComponent } from './mapsexample.component';

describe('MapsexampleComponent', () => {
  let component: MapsexampleComponent;
  let fixture: ComponentFixture<MapsexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
