import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDevPageRoutingModule } from './info-dev-routing.module';

import { InfoDevPage } from './info-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDevPageRoutingModule
  ],
  declarations: [InfoDevPage]
})
export class InfoDevPageModule {}
