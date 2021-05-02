import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';


  aplicarSonido(numero: number):void{
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav'; /*Para ejecutar en numero, concatenamos el nuemro que me este llegando */
    audio.load(); /*Le decimso que cargue el audio */ 
    audio.play(); /*Aca le decimso que lo ejecute */
  }
}
