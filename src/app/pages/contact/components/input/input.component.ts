import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputTypes = 'text' | 'email' | 'number' | 'password' | 'textarea';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = 'text';

  @Input() label: string = 'Input';
  
  @Input() max: number = 255;

  @Input() id: string = 'default_id';

  @Input() name: string = 'default_name';

  @Input() theme: 'dark' | 'light' = 'dark';

  @Input() set autocomplete(bool: 'on' | 'off') {
    this._autocomplete = bool;
  }
  _autocomplete: 'on' | 'off' = 'off';
  get autocomplete() {
    return this._autocomplete;
  }

  @Input() set value(value: any) {
    this._value = value;
  }
  _value: any = null;
  get value() {
    return this._value;
  }

  @Input() set disabled(bool: boolean) {
    this._disabled = bool;
  }
  _disabled: boolean = false;
  get disabled() {
    return this._disabled;
  }


  focus: boolean = false;

  writeValue(value: number): void {
    this.onChange(this.value);
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange = (rating: number) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};
}
