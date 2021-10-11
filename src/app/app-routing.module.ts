import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonimeComponent } from './abonime/abonime.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'abonime', component: AbonimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
