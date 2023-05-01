import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsekaiComponent } from './isekai.component';

describe('IsekaiComponent', () => {
  let component: IsekaiComponent;
  let fixture: ComponentFixture<IsekaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsekaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsekaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
