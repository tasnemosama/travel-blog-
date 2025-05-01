import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedLayoutComponent } from './boxed-layout.component';

describe('BoxedLayoutComponent', () => {
  let component: BoxedLayoutComponent;
  let fixture: ComponentFixture<BoxedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
