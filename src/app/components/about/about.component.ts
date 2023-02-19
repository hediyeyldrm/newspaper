import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMedium = faMedium;

  constructor() {}

  ngOnInit(): void {}
}
