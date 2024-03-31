import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';

import { CardPageRoutingModule } from './card-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    CardPageRoutingModule
  ],
  providers:[],
  declarations: [CardPage]
})
export class CardPageModule {}
