import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthenticateComponent} from "./authenticate/authenticate.component";

const routes: Routes = [
  { path: '',
    component: AdminComponent,
  },
  {
    path: 'authenticate',
    component: AuthenticateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
