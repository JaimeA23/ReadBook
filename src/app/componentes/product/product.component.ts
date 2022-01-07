import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {
  busqueda = new FormControl('');
  title = 'http-get';
  totalAngularPackages: string | undefined;
  url: string = 'https://gutendex.com/books?search=' + this.busqueda.value;
  error: any;
  urltitle: any;
  urlimage: any;
  urlauthor: any;
  urlidioma: any;
  page = 0;
  loading = "/assets/loading-12.gif";

  constructor(private http: HttpClient) { }


  cards: { id: any; title: any; author: any; lenguages: any; img: any; }[] = [];

  ngOnInit() {
    this.page = 0;
    this.http.get<any>(this.url).subscribe(data => {
      this.totalAngularPackages = data.count;
    }, error => this.error = error);
    this.onSubmit();
  }

  onSubmit() {

    this.page = 0;
    this.url = 'https://gutendex.com/books?search=' + this.busqueda.value;
    this.http.get<any>(this.url).subscribe(data => {
      this.cards = createcard(data);
      this.loading = "";
    }, error => this.error = error);
  }
  next() {
    this.page = this.page + 1;
  }
  preview() {
    if (this.page > 0) {
      this.page = this.page - 1;
    }

  }
}

function createcard(data: any) {
  const cards: { id: any; title: any; author: any; lenguages: any; img: any; }[] = [];
  data.results.forEach((value: any, index: number) => {
    cards.push({
      id: value.id,
      title: value.title,
      author: value.authors[0].name,
      lenguages: value.languages,
      img: value.formats['image/jpeg'],
    });
  });

  return cards;
}




