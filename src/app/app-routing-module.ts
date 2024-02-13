import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';






const routes: Routes = [
  { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
