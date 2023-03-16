import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
})
export class CounterComponent implements OnInit {
  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') progressOut: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  get getProgressPercent() {
    return this.progress + '%';
  }

  updateProgressPercent(amount: number) {
    if (this.progress >= 100 && amount >= 0) {
      this.progressOut.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && amount < 0) {
      this.progressOut.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + amount;
    this.progressOut.emit(this.progress);
    return;
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.progressOut.emit(newValue);
  }
}
