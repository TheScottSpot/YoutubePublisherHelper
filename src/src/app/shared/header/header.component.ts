///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../services/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.auth.handleAuthentication();
  }

  public getMessage() {
    this.auth.testApi().subscribe(message => console.log(message))
  }

  public logout(): void {
    this.auth.logout();
  }
}
