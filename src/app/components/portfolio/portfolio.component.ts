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

  openRecipesApp(){
    window.open("https://kitchenpro.netlify.app/homeImage")
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
    window.open("https://blogsite-app.netlify.app")
  }
  openTab(){
    window.open("https://multiservicesapp.netlify.app/client")
  }

/****************************************** For the source code**************************************/


  openGitEnginer(){
   window.open("")
  }

  openGitUniver(){
    window.open("https://github.com/Mamadou-cherif/UniversityOfficialApp") 
  }

  openGitRestaurant(){
    window.open("https://github.com/Mamadou-cherif/first-restaurant-app")

  }

  openGitMulti(){
    window.open("https://github.com/Mamadou-cherif/construction")

  }

  OpenGitSeconRestau(){
    window.open("https://github.com/Mamadou-cherif/restaurantApp2")

  }

  openGitBlogsite(){

    window.open("https://github.com/Mamadou-cherif/PersonnalblogSiteApp")

  }
 
  openGitPhotography(){
    window.open("https://github.com/Mamadou-cherif/Photography-app")
  }

  simpleMessage(){
    alert("this project is not deployed for now")
  }



  openRecipeGithubRepo(){
    window.open("https://github.com/Mamadou-cherif/recipe2")
  }
}
