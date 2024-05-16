import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, NgControl,
  ValidationErrors,
  Validator, ValidatorFn, Validators
} from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: InputComponent
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   multi: true,
    //   useExisting: InputComponent
    // }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {

  controlDir: NgControl = inject(NgControl, {self: true})
  constructor() {
    this.controlDir.valueAccessor = this;
  }


  @Input() label = '';
  @Input() placeholder = '';
  @Input() errMsg?: string;
  @Input() required = false;

  @ViewChild('input') input!: ElementRef;
  disabled = false;

  onChange(value: string){

  }

  onTouched() {

  }

  writeValue(obj: any): void {
    if(this.input) {
      this.input.nativeElement.value = obj;
    }

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validators: ValidatorFn[] = [];
    if(this.required) {
      validators.push(Validators.required)
    }

    return validators;

  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
