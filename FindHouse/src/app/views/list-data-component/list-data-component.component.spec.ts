import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataComponentComponent } from './list-data-component.component';

describe('ListDataComponentComponent', () => {
  let component: ListDataComponentComponent;
  let fixture: ComponentFixture<ListDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDataComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
