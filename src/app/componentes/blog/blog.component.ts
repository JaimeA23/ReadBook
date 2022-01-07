import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {




  cards = [
    { 
      date: "19 january 2021", 
      title1: "Eius, dolor? vel velit sed doloremque", 
      text: "Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro", 
      img: "/assets/b1.jpg", 
    },
    { 
      date: "19 january 2021", 
      title1: "We have more ", 
      text: "Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.", 
      img: "/assets/b2.jpg", 
    }
  ]


    ;

  ngOnInit(): void {
  }

}
