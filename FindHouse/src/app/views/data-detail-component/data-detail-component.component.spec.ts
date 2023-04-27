import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDetailComponentComponent } from './data-detail-component.component';

describe('DataDetailComponentComponent', () => {
  let component: DataDetailComponentComponent;
  let fixture: ComponentFixture<DataDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
