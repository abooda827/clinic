import { Component, OnInit } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.scss']
})
export class PricingPlansComponent implements OnInit {

  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
