// formulario-gasto.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Gasto } from '../../interfaces/gasto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-gasto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-gasto.component.html',
  styleUrls: ['./formulario-gasto.component.scss']
})
export class FormularioGastoComponent {
  @Output() gastoAgregado = new EventEmitter<Omit<Gasto, 'id'>>();

  categorias = ['comida', 'transporte', 'entretenimiento', 'salud', 'educación', 'otros'];
  
  nuevoGasto: Omit<Gasto, 'id'> = {
    descripcion: '',
    monto: 0,
    fecha: new Date(),
    tipo: 'egreso',
    categoria: 'comida'
  };

  submitForm(): void {
    if (this.nuevoGasto.descripcion && this.nuevoGasto.monto > 0) {
      this.gastoAgregado.emit({...this.nuevoGasto});
      this.resetForm();
    }
  }

  resetForm(): void {
    this.nuevoGasto = {
      descripcion: '',
      monto: 0,
      fecha: new Date(),
      tipo: 'egreso',
      categoria: 'comida'
    };
  }
}
