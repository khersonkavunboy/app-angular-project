import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewDetailsContainerComponent} from './overview-details-container/overview-details-container.component';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
  { path: '',  component: ContainerComponent },
  { path: 'overview-details', component: OverviewDetailsContainerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
