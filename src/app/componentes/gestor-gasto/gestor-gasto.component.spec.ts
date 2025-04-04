import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorGastoComponent } from './gestor-gasto.component';

describe('GestorGastoComponent', () => {
  let component: GestorGastoComponent;
  let fixture: ComponentFixture<GestorGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorGastoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
