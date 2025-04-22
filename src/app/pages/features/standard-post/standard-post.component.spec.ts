import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPostComponent } from './standard-post.component';

describe('StandardPostComponent', () => {
  let component: StandardPostComponent;
  let fixture: ComponentFixture<StandardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
