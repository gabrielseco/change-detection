import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() config: object;
  @Output() onChange = new EventEmitter();
  counter = 0;

  ngOnInit() {
    this.initConfig();
    this.counter += 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.config = Object.assign({}, { actions: true }, { config: changes.config.currentValue.message });
  }

  changeConfig($event) {
    this.counter += 1;
    this.onChange.emit({});
  }

  private initConfig() {
    this.config = Object.assign({}, { actions: true }, this.config);
  }

}
