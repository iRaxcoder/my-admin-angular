import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styleUrls: ['./graphic1.component.css'],
})
export class Graphic1Component {
  doughnutChartLabels: string[] = ['Pants', 'Shoes', 'T-shirt'];
  labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#9E1203', '#FF5800', '#FFB414'],
      },
    ],
  };
}
