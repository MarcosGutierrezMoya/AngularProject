import { Component, Input, inject } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import { Anime } from '../interface/anime.Interface';
import animesDb from '../../server/animesDb.json';
import { Target } from '@angular/compiler';

interface Anime {
  id: number;
  title: string;
  numCap: number;
  description: string[];
  favourite:Boolean;
  img: string;
  link: string;
  tags: String[];
}
interface Animes {
  animesDB: {};
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  @Input() ruta = "";
  http = inject(HttpClient);
  anime: Anime[] = [];
  animesDB: {} = {};
  showAll: Boolean = true;
  favourite: Boolean = true;

  constructor(location: Location) {

  }
  ngOnInit() {
    this.http.get<Animes[]>('http://localhost:5000/animes')
      .subscribe((data) => {
        this.animesDB = data;
      });
      this.ruta = location.pathname.slice(1);
      type StatusKey = keyof typeof animesDb;
      let str = this.ruta as StatusKey;
          
      if (this.showAll) {
        console.log(this.animesDB);
        this.animesDB;
        this.anime = animesDb.filter(anime => anime.tags.includes(str.toString()));
      } else {
        this.anime = animesDb.filter(anime=>anime.tags[0]===str);      
      }
      this.anime.sort(function (a, b) {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
      })
  }

  MakeFavourite(anime:any) {
    anime.favourite = !anime.favourite;
  }

}
