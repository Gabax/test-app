import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as noUiSlider from 'nouislider';

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
  @Input() id!: string;
  @Input() values: number[] = [0];
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() step: number = 1;
  @Input() disabled: boolean = false;

  @ViewChild('slider') slider!: ElementRef;

  noUiSlider!: any;

  constructor(private cdRef: ChangeDetectorRef) {
    if (this.values.length > 2) this.values.length = 2;
  }

  ngAfterViewInit(): void {
    noUiSlider.create(this.slider.nativeElement, {
      start: this.values,
      connect: this.values.length > 1 ? true : 'lower',
      step: this.step,
      behaviour: 'none',
      range: {
        min: this.min,
        max: this.max,
      },
    });

    this.noUiSlider = this.slider.nativeElement.noUiSlider;
    this.noUiSlider.on('slide', () => {
      this.values = [...this.noUiSlider.get(true)];
      this.cdRef.detectChanges();
    });

    this.disabled
      ? this.slider.nativeElement.setAttribute('disabled', true)
      : this.slider.nativeElement.removeAttribute('disabled');

    this.slider.nativeElement
      .querySelector('.noUi-handle-lower')
      ?.setAttribute('aria-label', 'slider');

    if (this.values.length > 1) {
      this.slider.nativeElement
        .querySelector('.noUi-handle-upper')
        ?.setAttribute('aria-label', 'slider massimo');
    }
  }

  onChange = (_: any) => {};
  onBlur = (_: any) => {};

  writeValue(obj: number[]): void {
    this.values = obj;
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
    this.cdRef.detectChanges();
  }
}
