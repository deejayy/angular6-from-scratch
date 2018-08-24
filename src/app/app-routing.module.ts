import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
//      { enableTracing: true }
    ),
  ],
  declarations: [
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
