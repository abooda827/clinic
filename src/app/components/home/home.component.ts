import { Component, OnInit } from '@angular/core';
import { faCoffee , faTooth , faHeartbeat , faPills , faCheckCircle , faSearch} from '@fortawesome/free-solid-svg-icons';
import { faApple , faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faUser , faCalendarCheck} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee;
  faApple = faApple;
  faAndroid = faAndroid;
  faSearch = faSearch;
  faUser = faUser;
  faCalendarCheck = faCalendarCheck;
  faTooth = faTooth;
  faHeartbeat =faHeartbeat;
  faPills = faPills;
  faCheckCircle =faCheckCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
