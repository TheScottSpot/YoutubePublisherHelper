import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestOptions} from '@angular/http';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private _oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    const accessToken = await this._oktaAuth.getAccessToken();
    console.log(accessToken);
  }

}
