import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarpPageRoutingModule } from './visualizarp-routing.module';

import { VisualizarpPage } from './visualizarp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarpPageRoutingModule
  ],
  declarations: [VisualizarpPage]
})
export class VisualizarpPageModule {}
