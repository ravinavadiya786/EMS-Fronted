import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})

export class MySwitchComponent implements OnInit,ViewCell {
  // constructor(private http : HttpService) { }
  // enable = this.http.enable
  enable: any;
  
  @Input() value: string | number ;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.enable = this.value;
  }

  onClick(event) {
    this.save.emit({ 'rowdata' : this.rowData, 'value' : event});
  }
  

}
