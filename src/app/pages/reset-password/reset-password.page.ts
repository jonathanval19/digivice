import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: [
        '', [
          Validators.email,
          Validators.required,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
        ]]
    })
  }

  async resetPassword() {
    if (this.resetForm?.valid) {
      this.authService.resetPassword(this.resetForm.value.email).then(() => {
        console.log('reset link sent');
        this.showAlert('Solicitud enviada', 'El enlace para reestablecer su contraseña fue enviado exitosamente.');
        this.router.navigate(['/login'])
      }
      ).catch((error) => {
        console.log(error);
      });
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
