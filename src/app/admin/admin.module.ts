import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {CoreModule} from "../../core/core.module";
import {AdminRoutingModule} from "./admin-routing-module";
import { AuthenticateComponent } from './authenticate/authenticate.component';
import {AppMaterialModule} from "../../shared/components/app-material/app-material.module";



@NgModule({
  declarations: [
    AdminComponent,
    AuthenticateComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AdminRoutingModule,
    AppMaterialModule,
  ]
})
export class AdminModule { }
