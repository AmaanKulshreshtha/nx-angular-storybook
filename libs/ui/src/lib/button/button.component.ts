import { ThemeService, Variants } from '@acn/theme';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as CSS from 'csstype';

@Component({
  selector: 'acn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variantType: Variants = 'primary';
  @Input() buttonText = 'Yo! I am default';
  @Input() type = 'button';
  @Output() btnClick = new EventEmitter();

  constructor(private themeService: ThemeService) {}

  get buttonStyles(): CSS.Properties {
    const {
      theme: { borderRadius, colors, spacing },
      isVariantSecondary,
    } = this.themeService;

    const variantStyles: CSS.Properties = isVariantSecondary(this.variantType)
      ? {
          border: `solid 1px ${colors['yellow']}`,
          backgroundColor: colors['white'],
        }
      : {
          border: 0,
          backgroundColor: colors['yellow'],
        };

    return {
      ...variantStyles,
      outline: 'none',
      borderColor: colors['yellow'],
      borderRadius: borderRadius['4xl'],
      padding: spacing['16'],
    };
  }

  onClick(event: MouseEvent) {
    this.btnClick.emit(event);
  }
}
