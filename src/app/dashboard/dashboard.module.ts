import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../modules/material/material.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ResultComponent } from './components/result/result.component';
import { GifPageComponent } from './pages/gif-page/gif-page.component';
import { RoutingModule } from './routing.module';
import { FormsComponent } from './pages/forms/forms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuscadorComponent,
    ResultComponent,
    GifPageComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,

    FormsModule,

  ],
  exports: [
    GifPageComponent
  ]
})
export class DashboardModule { }
