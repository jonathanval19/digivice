import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any;
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { 
    this.user=authService.getProfile();
    console.log('Usuario',this.user);
    
  }

  async logout() {
    this.authService.signOut().then(() => {
      this.router.navigateByUrl('/landing');
    }).catch((error)=>{
      console.log(error);
    });
  }
}
