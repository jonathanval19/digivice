import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser(email: string, password: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginUser(email: string, password: string) {
    try {
      const result = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
      //this.sendEmailVerification();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }

  async signOut() {
    return await this.ngFireAuth.signOut();
  }

  async getProfile() {
    return await this.ngFireAuth.currentUser;
  }

  async sendEmailVerification(): Promise<void> {
    return (await (this.ngFireAuth.currentUser)).sendEmailVerification();
  }
}
