import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') doughnutChartData: number[] = [];
  @Input('type') doughnutChartType: string = '';
  @Input() leyenda: string = 'Default Leyenda';


  constructor() { }

  ngOnInit() {
  }

}
