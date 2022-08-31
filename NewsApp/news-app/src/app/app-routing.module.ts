import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsComponent } from './top-news/top-news.component';

const routes: Routes = [
  {path:'',component:TopNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
