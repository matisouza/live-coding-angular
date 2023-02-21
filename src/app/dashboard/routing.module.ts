import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GifPageComponent } from './pages/gif-page/gif-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'gifs', component: GifPageComponent },
      { path: '**', redirectTo: 'gifs' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule { }
