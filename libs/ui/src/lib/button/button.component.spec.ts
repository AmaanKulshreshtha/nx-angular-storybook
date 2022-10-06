/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hello from primary', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const buttonElement: HTMLButtonElement =
      hostElement.querySelector('button')!;

    const BUTTON_LABEL = 'hello from the other side';
    component.buttonText = BUTTON_LABEL;
    // buttonElement.textContent = BUTTON_LABEL;
    fixture.detectChanges();

    expect(buttonElement?.textContent).toBe(component.buttonText);
  });
});
