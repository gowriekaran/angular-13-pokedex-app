import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '**', redirectTo: 'home'},
  { path : '' , redirectTo : '/home' , pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
