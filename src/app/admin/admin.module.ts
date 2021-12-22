import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {CoreModule} from "../../core/core.module";
import {AdminRoutingModule} from "./admin-routing-module";



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
