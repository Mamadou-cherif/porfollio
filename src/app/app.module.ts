import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigService } from "./config.service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProgrammingStatComponent } from './components/programming-stat/programming-stat.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatsComponent } from './components/stats/stats.component';
import { StudiesComponent } from './components/studies/studies.component';
import {AboutImageComponent} from "./components/about-image/about-image.component"
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { AnimationbtnComponent } from './components/animationbtn/animationbtn.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutImageComponent,
    HeaderComponent,
    NavigationComponent,
    AboutComponent,
    PortfolioComponent,
    AchievementsComponent,
    ContactComponent,
    ProgrammingStatComponent,
    FooterComponent,
    StatsComponent,
    StudiesComponent,
    AnimationbtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 10,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 20,
    }),
    HttpClientModule
    
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
