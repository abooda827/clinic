import { Component, OnInit } from '@angular/core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  faPlayCircle =faPlayCircle
  constructor() { }

  ngOnInit(): void {
  }

}
