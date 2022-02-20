import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;

  isOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isOpen = !this.isOpen;
  }

}
