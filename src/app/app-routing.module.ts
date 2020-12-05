import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutImageComponent } from './components/about-image/about-image.component';
import { AboutComponent } from './components/about/about.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StudiesComponent } from './components/studies/studies.component';

const routes: Routes = [

{path:"about", component: AboutComponent},
{path:"contact", component:ContactComponent},
{path:"", redirectTo: '/imageHome', pathMatch: 'full'},
{path:"portfolio", component:PortfolioComponent},
{path: "achievement", component:AchievementsComponent},

{path: "studies", component:StudiesComponent},
{path: "imageHome", component:AboutImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
