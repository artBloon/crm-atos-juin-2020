import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeOrdersComponent } from './page-liste-orders.component';

describe('PageListeOrdersComponent', () => {
  let component: PageListeOrdersComponent;
  let fixture: ComponentFixture<PageListeOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListeOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
