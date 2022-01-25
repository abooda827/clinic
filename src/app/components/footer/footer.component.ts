import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram , faLinkedinIn , faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faArrowRight = faArrowRight;
  faEnvelope = faEnvelope;
  faInstagram =faInstagram;
  faTwitter =faTwitter;
  faLinkedinIn = faLinkedinIn;


  constructor() { }

  ngOnInit(): void {
  }

}
