import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeatureddealsdetailsPageRoutingModule } from './featureddealsdetails-routing.module';

import { FeatureddealsdetailsPage } from './featureddealsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureddealsdetailsPageRoutingModule
  ],
  declarations: [FeatureddealsdetailsPage]
})
export class FeatureddealsdetailsPageModule {}
