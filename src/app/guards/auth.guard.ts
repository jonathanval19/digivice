import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthPipeGenerator, canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) { }

  canActivate() {
    // Configura la redirección a la página de aterrizaje para usuarios no autenticado s}
  }
}
