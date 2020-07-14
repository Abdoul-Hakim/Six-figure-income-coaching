import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'unsubscribe',
    component: UnsubscribeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
