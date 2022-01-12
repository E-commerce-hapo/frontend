import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MaterialInputComponent} from './material-input/material-input.component';
import {MaterialModule} from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import {registerLocaleData} from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppPipesModule} from "../../pipes/app-pipes.module";

registerLocaleData(localeVi);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    AppPipesModule,
  ],
  declarations: [
    MaterialInputComponent,
  ],
  exports: [
    MaterialInputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'vi'},
    DecimalPipe,
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppMaterialModule {

}
