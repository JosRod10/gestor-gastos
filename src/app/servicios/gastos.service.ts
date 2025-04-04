import { Injectable } from '@angular/core';
import { Gasto } from '../interfaces/gasto';
import * as XLSX from 'xlsx';

@Injectable({ providedIn: 'root' })
export class GastosService {
  private readonly STORAGE_KEY = 'gastos-app-data';
  private gastos: Gasto[] = [];

  constructor() {
    this.cargarDatos();
  }

  agregarGasto(gasto: Omit<Gasto, 'id'>): void {
    const nuevoGasto: Gasto = {
      ...gasto,
      id: crypto.randomUUID(),
      fecha: new Date(gasto.fecha)
    };
    this.gastos.push(nuevoGasto);
    this.guardarDatos();
  }

  obtenerGastos(): Gasto[] {
    return [...this.gastos];
  }

  eliminarGasto(id: string): void {
    this.gastos = this.gastos.filter(g => g.id !== id);
    this.guardarDatos();
  }

  private cargarDatos(): void {
    const datos = localStorage.getItem(this.STORAGE_KEY);
    this.gastos = datos ? JSON.parse(datos) : [];
  }

  private guardarDatos(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.gastos));
  }


  exportarExcel(): void {
    // Crear un array de objetos con los datos
    const datos = this.gastos.map(gasto => ({
      "Descripción": gasto.descripcion,
      "Monto": gasto.monto,
      "Fecha": gasto.fecha.toString(),
      "Tipo": gasto.tipo,
      "Categoría": gasto.categoria
    }));

    // Crear una hoja de trabajo (worksheet) de Excel
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(datos);

    // Crear un libro de trabajo (workbook) y agregar la hoja
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Gastos');

    // Generar el archivo Excel y descargarlo
    XLSX.writeFile(wb, 'gastos.xlsx');
  }
}
