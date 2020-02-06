import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBrokers from './state/brokers/brokers.reducer';
import { BrokersEffects } from './state/brokers/brokers.effects';
import { BrokersFacade } from './state/brokers/brokers.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(
      fromBrokers.BROKERS_FEATURE_KEY,
      fromBrokers.reducer
    ),

    EffectsModule.forFeature([BrokersEffects]),
  ],
  providers: [BrokersFacade],
})
export class AdminBrokersFeatureModule {}
