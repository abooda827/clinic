import { Component, OnInit } from '@angular/core';

import { faEnvelope , faUser } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
