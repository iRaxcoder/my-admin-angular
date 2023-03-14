import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress: number = 50;

  get getProgressPercent() {
    return this.progress + '%';
  }

  updateProgressPercent(amount: number) {
    if (this.progress >= 100 && amount >= 0) {
      return (this.progress = 100);
    }
    if (this.progress <= 0 && amount < 0) {
      return (this.progress = 0);
    }

    return (this.progress = this.progress + amount);
  }
}
