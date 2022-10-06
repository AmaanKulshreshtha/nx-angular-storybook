import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ThemeService } from '@acn/theme';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
  providers: [ThemeService],
})
export class UiModule {}
