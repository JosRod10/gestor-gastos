// app.component.ts (ejemplo de uso)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosService } from '../../servicios/gastos.service';
import { FormularioGastoComponent } from '../formulario-gasto/formulario-gasto.component';
import { ListaGastosComponent } from '../lista-gastos/lista-gastos.component';
import { GraficoGastosComponent } from '../grafico-gastos/grafico-gastos.component';
import { Gasto } from '../../interfaces/gasto';

@Component({
  selector: 'app-gestor-gasto',
  standalone: true,
  imports: [CommonModule, FormularioGastoComponent, ListaGastosComponent, GraficoGastosComponent],
  templateUrl: 'gestor-gasto.component.html',
})
export class GestorGastoComponent {
  constructor(public gastosService: GastosService) {}

  agregarGasto(gasto: Omit<Gasto, 'id'>): void {
    this.gastosService.agregarGasto(gasto);
  }
}
