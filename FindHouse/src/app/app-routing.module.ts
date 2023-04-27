import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './views/home-component/home-component.component';
import { ListDataComponentComponent } from './views/list-data-component/list-data-component.component';
import { DataDetailComponentComponent } from './views/data-detail-component/data-detail-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'listData', component: ListDataComponentComponent },
  { path: 'detail', component: DataDetailComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
