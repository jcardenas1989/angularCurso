import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'HOLA ...';
  tasks =[
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]
}
