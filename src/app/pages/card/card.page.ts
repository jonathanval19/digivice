import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DigimonsService } from '../../services/digimons.service';
import { Router } from '@angular/router';
import { Digimon } from 'src/app/interfaces/digimon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  digimonId: string;
  digimon: Digimon;
  loading: any;

  constructor(
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    private navCtrl: NavController,
    public digimonService: DigimonsService,
    public router: Router
  ) { }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.digimonId = await this.route.snapshot.queryParams['id'];
    this.digimonService.getDigimon(this.digimonId).subscribe((data) => {
      this.digimon = data;
      //console.log('digimon', this.digimon);
      this.loading.dismiss();
    }, error => {
      console.error(error);
      this.loading.dismiss();
    });
  }

  regresar() {
    this.navCtrl.back();
  }

}
