// grafico-gastos.component.ts
import { Component, Input } from '@angular/core';
import { Gasto } from '../../interfaces/gasto';
import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafico-gastos',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './grafico-gastos.component.html',
  styleUrls: ['./grafico-gastos.component.scss']
})
export class GraficoGastosComponent {
  @Input() gastos: Gasto[] = [];

  public chartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  };

  get chartData(): ChartConfiguration<'pie'>['data'] {
    const categorias = [...new Set(this.gastos.map(g => g.categoria))];
    
    return {
      labels: categorias,
      datasets: [{
        data: categorias.map(c => 
          this.gastos
            .filter(g => g.categoria === c)
            .reduce((sum, g) => sum + (g.tipo === 'ingreso' ? g.monto : -g.monto), 0)
        ),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ]
      }]
    };
  }
}
