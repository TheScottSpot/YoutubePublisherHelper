import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {accountConstants} from '../account-constants';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login() {
    const email = this.loginForm.controls[accountConstants.email].value;
    const password = this.loginForm.controls[accountConstants.password].value;

    this.auth.login(email, password);
  }
}
