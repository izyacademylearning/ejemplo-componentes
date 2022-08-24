import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleados';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaEmpleados: Empleado[] = [
    { id: 1, nombre: 'Pepito', apellido: 'Perez', area: 'Desarrollo' },
    { id: 2, nombre: 'Luis', apellido: 'Cano', area: 'Mercadeo', },
    { id: 3, nombre: 'Julio', apellido: 'Jaramillo', area: 'Recursos' },
    { id: 4, nombre: 'Andres', apellido: 'Arcila', area: 'Desarrollo' },
    { id: 5, nombre: 'Maria', apellido: 'Velez', area: 'Mercadeo' },
  ]
  constructor() { }

  radioButtonSeleccionado = 'Todos';
  
  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listaEmpleados.length;
  }

  obtenerTotalDesarrollo(): number {
    return this.listaEmpleados.filter(list => list.area === 'Desarrollo').length;
  }

  obtenerTotalMercadeo(): number {
    return this.listaEmpleados.filter(list => list.area === 'Mercadeo').length;
  }

  obtenerTotalRecursos(): number {
    return this.listaEmpleados.filter(list => list.area === 'Recursos').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
  this.radioButtonSeleccionado = radioButtonSelec;
  }

}
