import { Component, Input, inject } from '@angular/core';
import { Location } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Categoria } from '../interface/anime.Interface';
import animesDb from '../../server/animesDb.json';

interface Categoria {
  id: number;
  title: string;
  numCap: number;
  descripcion: string;
  imagen: string;
  link: string;
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  @Input() ruta = "";
  // http = inject(HttpClient);
  categoria: Categoria[] = [];


  constructor(location: Location) {

  }

  ngOnInit() {
    // this.http.get<Categoria[]>('../../server/animesDb.json')
    //   .subscribe((data) => {
    //     this.categoria = data;
    //     console.log(data);
    //   });
    this.ruta = location.pathname.slice(1);
    type StatusKey = keyof typeof animesDb;
    let str = this.ruta as StatusKey;

    this.categoria = animesDb[str];
  }
}
