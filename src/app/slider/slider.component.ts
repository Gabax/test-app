import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements ControlValueAccessor {
  @Input() value: number = 30;
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() step: number = 1;
  @Input() disabled: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  onChange = (_: any) => {};
  onBlur = (_: any) => {};

  writeValue(obj: number): void {
    this.value = obj;
    this.cdRef.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
