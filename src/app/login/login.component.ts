import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onChangeUsername(event: any): void {
    this.username = event.target.value;
  }

  onChangePassword(event: any): void {
    this.password = event.target.value;
  }
  onChangeRememberMe(event: any): void {
    this.rememberMe = !this.rememberMe;
  }

  login() {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember me:', this.rememberMe);
  }

  loginWithGoogle() {
    // Implement Google login logic here
    console.log('Login with Google');
  }

  loginWithFacebook() {
    // Implement Facebook login logic here
    console.log('Login with Facebook');
  }
}