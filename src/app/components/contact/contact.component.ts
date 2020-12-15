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
 
  openLinkedinTab(){
    window.open("https://www.linkedin.com/in/mamadou-ch%25C3%25A9rif-barry-917095193/?fbclid=IwAR23nrL3AkLbiPMBlEYkz9GsMXtjnpKacH8oT2CNkLsS_ralcm9clK3TZb8")
  }

  openTwitterTab(){
    window.open("https://www.twitter.com/Mamadoucherifb3")
  }

  openGithubTab(){
    window.open("https://github.com/Mamadou-cherif")
  }
}
