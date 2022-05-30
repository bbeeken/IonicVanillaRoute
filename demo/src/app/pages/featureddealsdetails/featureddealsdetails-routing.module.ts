import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureddealsdetailsPage } from './featureddealsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureddealsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureddealsdetailsPageRoutingModule {}
