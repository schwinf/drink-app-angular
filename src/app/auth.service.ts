import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class signUpResponse {
  data: string;
  error: string;

}
export class AuthResponse {
  body: signUpResponse;
  statusCode: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }

    createAccount(form): Observable<AuthResponse> {
      let serializedForm = JSON.stringify(form)
      return this.http.post<AuthResponse>('https://wlln33rch5.execute-api.us-east-2.amazonaws.com/default/cognito-signup', serializedForm);
    }

    isLoggedIn(){
      return true;
    }
}