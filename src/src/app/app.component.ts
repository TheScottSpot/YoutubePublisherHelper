import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {AuthService} from './shared/services/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public env = environment;

  constructor(public auth: AuthService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('PubTube');
    this.auth.handleAuthentication();
  }
}
