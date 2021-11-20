import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display=false;
onclick(event:Element){
  event.classList.toggle('fa-times');
  event.classList.toggle('active');
  this.display=!this.display;
}
  constructor() { }

  ngOnInit(): void {
  }

}
