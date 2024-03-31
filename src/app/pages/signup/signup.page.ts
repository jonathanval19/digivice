import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { collection, addDoc, getDocs, getFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  firestore = getFirestore();

  regForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: [
        '',
        [Validators.required]
      ],
      email: [
        '', [
          Validators.email,
          Validators.required,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
        ]],
      password: [
        '',
        [Validators.required,

        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}")]
      ]
    })
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const usersCollection = collection(this.firestore, 'usuarios');

    const querySnapshot = await getDocs(usersCollection);
    const existingUsers = querySnapshot.docs.map((doc) => doc.data());

    const duplicateUser = existingUsers.find((user) => user.email === this.regForm.value.email );
    if (duplicateUser) {
      loading.dismiss();
      console.log('Usuario ya registrado');
      this.showAlert('Usuario ya registrado', 'Corrige la información e intentalo de nuevo.');
      return;
    }

    if (this.regForm?.valid) {
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss();
      });

      if (user) {
        const registro = await this.addfullname(this.regForm.value.fullname, this.regForm.value.email).catch((error) => {
          console.log(error);
          loading.dismiss();
        });
        loading.dismiss();
        this.router.navigate(['/login'])
      } else {
        console.log('provide correct values');
      }
    }
  }

  async addfullname(fullname: string, email: string) {
    const coleccionUsuarios = collection(this.firestore, 'usuarios');
    await addDoc(coleccionUsuarios, { fullname: fullname, email: email });
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
