import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './card-page/card-page.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', component: CardPageComponent },
  { path: 'card-detail/:name', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
