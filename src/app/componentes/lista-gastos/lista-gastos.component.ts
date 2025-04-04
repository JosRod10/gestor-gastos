// lista-gastos.component.ts
import { Component, Input } from '@angular/core';
import { Gasto } from '../../interfaces/gasto';
import { CommonModule } from '@angular/common';
import { FormatoMonedaPipe } from '../../pipes/formato-moneda.pipe';
import { GastosService } from '../../servicios/gastos.service';

@Component({
  selector: 'app-lista-gastos',
  standalone: true,
  imports: [CommonModule, FormatoMonedaPipe],
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.scss']
})
export class ListaGastosComponent {
  @Input() gastos: Gasto[] = [];
  @Input() mostrarEliminar = true;
  @Input() limite?: number;

  constructor(public servicesGasto: GastosService,){}

  get gastosMostrados(): Gasto[] {
    return this.limite ? this.gastos.slice(0, this.limite) : this.gastos;
  }

  eliminarGasto(gasto:string){
    this.servicesGasto.eliminarGasto(gasto);
    return this.limite ? this.gastos.slice(0, this.limite) : this.gastos;
  }

  exportarExcel(){
    this.servicesGasto.exportarExcel();
  }
}
