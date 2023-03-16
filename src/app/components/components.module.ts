import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CounterComponent, DoughnutComponent],
  exports: [CounterComponent, DoughnutComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
