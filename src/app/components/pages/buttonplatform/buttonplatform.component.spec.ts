import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonplatformComponent } from './buttonplatform.component';

describe('ButtonplatformComponent', () => {
  let component: ButtonplatformComponent;
  let fixture: ComponentFixture<ButtonplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonplatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
