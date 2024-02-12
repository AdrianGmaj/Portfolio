import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sideOpen = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.nav') as HTMLElement;
    if (this.router.url === '/') {

      if (window.scrollY > element.clientHeight * 3) {
        element.classList.add('scrolled');
      } else {
        element.classList.remove('scrolled');
      }
    } else {

      element.classList.add('scrolled');
    }
  }

  openSide(){
if(this.sideOpen == false){
  this.sideOpen = true;
}else{
  this.sideOpen = false
}

  }
}
