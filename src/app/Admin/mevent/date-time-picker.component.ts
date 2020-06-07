import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import {
  getSeconds,
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  setSeconds,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setYear
} from 'date-fns';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

export const DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimePickerComponent),
  multi: true
};

@Component({
  selector: 'mwl-demo-utils-date-time-picker',
  template: `
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group" >
          <input
            readonly
            class="form-control"
            [placeholder]="placeholder"
            name="date"
            [minDate]="minDate"
            [(ngModel)]="dateStruct"
            (ngModelChange)="updateDate()"
            ngbDatepicker
            (click)="datePicker.toggle()"
            #datePicker="ngbDatepicker">
            <div class="input-group-append">
              <div class="input-group-text" (click)="datePicker.toggle()" >
                <i class="fa fa-calendar"></i>
              </div>
            </div>
        </div>
      </div>
    </form>
    <div class="form-group">
      <ngb-timepicker
        [(ngModel)]="timeStruct"
        (ngModelChange)="updateTime()"
        [formControl]="ctrl"
        >
      </ngb-timepicker>
      <div *ngIf="ctrl.valid" class="small form-text text-success">Great choice</div>
  <div *ngIf="ctrl.errors" class="small form-text text-danger">
    <div *ngIf="ctrl.errors['required']">Select some time during lunchtime</div>
    <div *ngIf="ctrl.errors['tooLate']">Oh no, it's way too late</div>
    <div *ngIf="ctrl.errors['tooEarly']">It's a bit too early</div>
  </div>
    </div>
  `,
  styles: [
    `
    .form-group {
      width: 100%;
    }
  `
  ],
  providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class DateTimePickerComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  minDate: NgbDateStruct;

  date: Date;

  dateStruct: NgbDateStruct;

  timeStruct: NgbTimeStruct;

  datePicker: any;

  private onChangeCallback: (date: Date) => void = () => { };

  constructor(private cdr: ChangeDetectorRef) { }
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour <= 0) {
      return { tooEarly: true };
    }
    if (value.hour > 12) {
      return { tooLate: true };
    }

    return null;
  });
  writeValue(date: Date): void {
    this.date = date;
    this.minDate = {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date)
    }
    this.dateStruct = {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date)
    };
    this.timeStruct = {
      second: getSeconds(date),
      minute: getMinutes(date),
      hour: getHours(date)
    };
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void { }

  updateDate(): void {
    const newDate: Date = setYear(
      setMonth(
        setDate(this.date, this.dateStruct.day),
        this.dateStruct.month - 1
      ),
      this.dateStruct.year
    );
    this.onChangeCallback(newDate);
  }

  updateTime(): void {
    const newDate: Date = setHours(
      setMinutes(
        setSeconds(this.date, this.timeStruct.second),
        this.timeStruct.minute
      ),
      this.timeStruct.hour
    );
    this.onChangeCallback(newDate);
  }
}
