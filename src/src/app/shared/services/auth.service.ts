import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';
import {tokenize} from '@angular/compiler/src/ml_parser/lexer';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }

  baseUrl: string = environment.baseUrl;

  public getAuthHeader(): HttpHeaders {
    const header = new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return header;
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  public register(value): Observable<any> {
    const user = Object.assign(new User(), value);

    return this.http.post<any>(this.baseUrl + '/accounts', user, {headers: this.getAuthHeader()});
  }

  public login(email, password): void {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const body = {email, password};
    this.http.post<any>(this.baseUrl + '/auth/login', body, {headers: headers})
      .subscribe(authToken =>{
        console.log(authToken)
      });
  }

  public logout(): void {
    localStorage.removeItem('auth_token');
  }
}
