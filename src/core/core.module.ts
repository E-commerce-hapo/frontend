import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/header/user-info/user-info.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    UserInfoComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ]
})
export class CoreModule { }
