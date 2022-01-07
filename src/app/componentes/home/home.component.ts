import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  page=0;
  slidernum=1;


  cards = [
    { 
      subttitle: "Bostorek Bookstore", 
      title1: "For All Your", 
      title2: "Reading Needs", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.", 
      img: "/assets/slider-img.png", 
    },
    { 
      subttitle: "Bostorek Bookstore", 
      title1: "We have more ", 
      title2: "Than 1000 books", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.", 
      img: "/assets/about-img.png", 
    }
  ]


    ;

  ngOnInit(): void {
  }

  next() { 
    if(this.page == this.slidernum){
      this.page=0;
    }
    else{
      this.page=this.page+1;
    }
  }
  preview() { 
    if(this.page>0){
      this.page=this.page-1;
    }
    else{
      this.page=this.slidernum;
    }
  }

}


