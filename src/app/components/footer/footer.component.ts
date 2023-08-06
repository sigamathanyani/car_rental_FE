import { Component } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  facebook = faFacebook;
  linkedIn = faLinkedin;
  twitter = faTwitter;
}
