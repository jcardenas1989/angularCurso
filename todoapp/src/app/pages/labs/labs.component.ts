import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear Servicio',
  ]);

  name= signal('Javier cardenas');
  edad= 34;
  disabled=true;
  img ='https://w3schools.com/howto/img_avatar.png';

  person= signal({
   name: 'Javier cardenas',
   age: 16,
   avatar:'https://w3schools.com/howto/img_avatar.png'
  });

  clickmefunction(){
    alert ('Hola ' + this.person.name);
  }  

  chengeHandelr(event: Event){
    const input = event.target as HTMLInputElement;
    const newvalue =input.value;
    this.name.set (newvalue);
    
  }

  keydownHandelr(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  chengeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newvalue =input.value;
    this.person.update(prevState =>{
      return {
        ...prevState,
        age: parseInt(newvalue)
      }
    }
    );
  }
}
