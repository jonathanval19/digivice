import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPipeGenerator, canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor( private router: Router) {}

  canActivate() {
    // Configura la redirección a la página de aterrizaje para usuarios no autenticados
    const redirectUnauthorizedToLanding = redirectUnauthorizedTo(['landing']);

    // Define una función generadora de AuthPipe que utiliza la configuración de redirección
    const authPipeGenerator: AuthPipeGenerator = (next, state) => redirectUnauthorizedToLanding;

    // Devuelve la configuración de redirección
    return canActivate(authPipeGenerator);}
}
