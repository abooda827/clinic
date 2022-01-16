import { Component, OnInit } from '@angular/core';
import { faCoffee , faTooth , faHeartbeat , faPills , faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { faApple , faAndroid } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee;
  faApple = faApple;
  faAndroid = faAndroid;
  faTooth = faTooth;
  faHeartbeat =faHeartbeat;
  faPills = faPills;
  faCheckCircle =faCheckCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
