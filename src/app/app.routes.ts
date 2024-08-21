import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './birthday/birthday.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'birthday', component: BirthdayComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
