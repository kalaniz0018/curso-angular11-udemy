import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
   listEstudiantes: any[] = [
     {nombre: "Tomas Gonzales", estado: 'Promocionado'},
     {nombre: "Lucas Perez", estado: 'Regular'},
     {nombre: "Gala Fanego Alaniz", estado: 'Libre'},
     {nombre: "Juan Garcia", estado: 'Regular'},
     {nombre: "Marta Osikovsky", estado: 'Promocionado'},
     {nombre: "Nicolás Fanego", estado: 'Libre'}
   ]
    

}
