import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  urlTree: any;
  id: any;

  title = 'http-get';
  totalAngularPackages: string | undefined;
  url: string = 'https://gutendex.com/books?search=';
  error: any;
  loading = "/assets/loading-12.gif";
  starRating:number = 0; 

  cards = [
    { 
      text: " Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.", 
      author: "Author 1", 
    },
    { 
      text: "Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro", 
      author: "Author 2", 
    }
  ]

  constructor(private http: HttpClient, private router: Router) {
    this.urlTree = this.router.parseUrl(this.router.url);

    this.id = this.urlTree.queryParams['id'];
   }

   card: { id: any; title: any; author: any; lenguages: any; img: any; starRating : number;}[] = [];

  ngOnInit(): void {
        this.http.get<any>(this.url).subscribe(data => {
      this.totalAngularPackages = data.count;
    }, error => this.error = error);
    this.onSubmit();
  }

  onSubmit() {

    
    this.url = 'https://gutendex.com/books?ids='+this.id;
    this.http.get<any>(this.url).subscribe(data => {
      this.card = createcard(data);
      this.loading = "";
    }, error => this.error = error);
  }

}

function createcard(data: any) {
  var estrella = Math.floor(Math.random() * 6);
  const cards: { id: any; title: any; author: any; lenguages: any; img: any; starRating : number; }[] = [];
  data.results.forEach((value: any, index: number) => {
    cards.push({
      id: value.id,
      title: value.title,
      author: value.authors[0].name,
      lenguages: value.languages,
      img: value.formats['image/jpeg'],
      starRating: estrella,
    });
  });

  return cards;
}