import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  openFacebookTab(){
    window.open("https://www.facebook.com/profile.php?id=100007866630873")
  }

  openTwitterTab(){
    window.open("https://www.twitter.com/Mamadoucherifb3")
  }

  openGithubTab(){
    window.open("https://github.com/Mamadou-cherif")
  }
}
