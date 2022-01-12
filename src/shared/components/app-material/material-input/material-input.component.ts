import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { ValueAccessorBase } from 'apps/core/src/interfaces/ValueAccessorBase';
import { MatInput } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import {MaterialInput} from "@etop/shared/components/etop-material/material-input.interface";
import {MatSelect} from "@angular/material/select";
import {Moment} from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import moment from 'moment';

class CustomerStateMatcher extends ErrorStateMatcher {
  constructor(public ctx: MaterialInputComponent) {
    super();
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return this.ctx.error;
  }
}

@Component({
  selector: 'etop-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: MaterialInputComponent, multi: true},
  ]
})
export class MaterialInputComponent extends ValueAccessorBase<string> implements OnInit, MaterialInput {
  @ViewChild('matInput', {static: false}) matInput: MatInput;
  @ViewChild('matSelect', {static: false}) matSelect: MatSelect;

  @Input() placeholder: string;
  @Input() appearance: any;
  @Input() textLabel: string;
  @Input() text: string;
  @Input() type: string;
  @Input() optionSelect = [];
  @Input() keyboardType = 'text';
  @Input() autocomplete = 'off';
  @Input() error = false;
  @Input() errorMessage: string;
  @Input() disabled: boolean;
  @Input() minRow = 2;
  @Input() maxRow = 5;
  @Input() displayHTML = false;
  @Input() topshipInput = false;
  @Input() matOptionHeight: string;
  @Input() displayMap: (any) => string;
  @Input() valueMap: (any) => string;

  @Output() blur = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() enter = new EventEmitter();

  date = new FormControl(moment());
  minDate = new Date(1900, 0, 1);
  // NOTE: *** use for CUSTOM-TYPE material input where value will never change ***
  immutableValue = '-';

  errorStateMatcher = new CustomerStateMatcher(this);

  ngOnInit() {
  }

  onInputDateChange() {
    const _inputValue = this.matInput.value;
    if (!_inputValue) {
      this.value = null;
    }
  }

  focusInput() {
    setTimeout(_ => this.matInput.focus());
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }

  focus() {
    if (this.matInput) {
      this.matInput.focus();
    }
    if (this.matSelect) {
      this.matSelect.open();
    }
  }

  _openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }
}
