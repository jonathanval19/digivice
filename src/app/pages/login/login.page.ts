import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '', [
          Validators.email,
          Validators.required,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
        ]],
      password: [
        '',
        [Validators.required]
      ]
    })
  }

  get errorControl() {
    return this.loginForm?.controls;
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.loginForm?.valid) {
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);

      if (user) {
        // Verificar el estado de verificación del correo electrónico antes de navegar
        if (user.user.emailVerified) {
          loading.dismiss();
          this.router.navigate(['/home']);
        } else {
          loading.dismiss();
          this.showAlert(
            'Verificación de correo requerida',
            'Verifique su correo electrónico para acceder a la aplicación.'
          );
        }
      } else {
        console.log('Proporcione valores correctos', user);
        loading.dismiss();
        console.log('Usuario no encontrado');
        this.showAlert('Usuario no encontrado', 'Correo electrónico y/o contraseña no son válidos.');
        return;
      }
    }
  }

  async showAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
      cssClass: 'bg-red-500'
    });

    await alert.present();
  }

}
