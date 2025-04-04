import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatoMoneda', standalone: true })
export class FormatoMonedaPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(value);
  }
}
