import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    AboutMeComponent,
    PortfolioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
