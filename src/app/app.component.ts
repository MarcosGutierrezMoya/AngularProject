import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directorio_anime';
  constructor(location: Location) {

  }

  cambiarRuta(ruta: String) {
    location.pathname = '/' + ruta;

  }
}
