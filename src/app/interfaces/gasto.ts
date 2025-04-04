export interface Gasto {
    id: string;
    descripcion: string;
    monto: number;
    fecha: Date;
    tipo: 'ingreso' | 'egreso';
    categoria: string;
  }
