import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this._isLogged;
  }

  setAuthenticated(): void {
    this._isLogged = true;
  }

}
