import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEduTab(){
    window.open("https://university-website-app.netlify.app/")
  }

  openRestaurantTab(){
    window.open("https://first-restaurant-app.netlify.app")
  }

  openMultiserviceTab(){
    window.open("https://engenerin-service.netlify.app")

  }

  openTabRestau(){
    window.open("https://my-second-restaurant-app.netlify.app")
  }

  openTabBlogSite(){
    window.open("https://mamadou-cherif.github.io/nouveau/")
  }
  openTab(){
    window.open("https://multiservicesapp.netlify.app/client")
  }
}
