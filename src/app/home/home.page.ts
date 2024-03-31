import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DigimonsService } from '../services/digimons.service';
import { Router } from '@angular/router';
import { collection, addDoc, getDocs, getFirestore } from '@angular/fire/firestore';
import { Digimon } from '../interfaces/digimon.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: any;
  user: any;
  digimons: Digimon[] = [];
  currentPage = 10;
  firestore = getFirestore();
  loading: any;

  constructor(
    public authService: AuthenticationService,
    public digimonService: DigimonsService,
    public loadingCtrl: LoadingController,
    public router: Router
  ) { }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create();
    this.obtenerUsuarioActual();
    await this.loading.present();
    await this.fetchDigimons();
  }

  async obtenerUsuarioActual() {
    try {
      const usuario = await this.authService.getProfile();
      console.log('Usuario actual:', usuario);
    } catch (error) {
      console.error('Error al obtener el usuario actual:', error);
    }
  }

  async fetchDigimons() {
    await this.digimonService.getAllDigimons(this.currentPage).subscribe(response => {
      //console.log('data',response)
      this.digimons = response['content'];
      this.loading.dismiss();
    });
  }

  async nextPage() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.currentPage = this.currentPage + 10;
    this.fetchDigimons();
  }

  async logout() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.authService.signOut().then(() => {
      this.loading.dismiss();
      this.router.navigateByUrl('/landing');
    }).catch((error) => {
      console.log(error);
    });
  }

  async goToCard(id: string) {
    //console.log('digimon id', id);
    this.router.navigate(['/card/'], { queryParams: { id } });
  }
}
