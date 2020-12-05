import { Component, OnInit } from '@angular/core';
import {ConfigService} from "src/app/config.service"
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  title = 'ngrx';
  showSpinner = true;
  data: any;

  achievement: {
    skillTitle:String,
    datapercent:any

}
  constructor(private config: ConfigService, private http: HttpClient) { 

    this.http.get('http://YourApiAddress').subscribe(data => {
      this.data = data;
      this.showSpinner = false;
      }, error => console.error(error));

  }

  ngOnInit(): void {
    this.achievement=this.getSkill(),
    console.log(this.achievement)
  }

  getSkill(){
    return this.config.getConfig().achievement
  }

}
