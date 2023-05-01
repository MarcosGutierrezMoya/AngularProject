import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  @Input() ruta = "";
  constructor(location: Location) {
    
  }
  
  ngOnInit(){
    // this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    //   .subscribe((data) => {
    //     this.products = data;
    //   });
    this.ruta = location.pathname;
  }
}
