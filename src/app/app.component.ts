import { Component } from '@angular/core';
import { GestorGastoComponent } from './componentes/gestor-gasto/gestor-gasto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GestorGastoComponent],
  template: '<app-gestor-gasto></app-gestor-gasto>'
})
export class AppComponent {
  title = 'gastos-app';
}
