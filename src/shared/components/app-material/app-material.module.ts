import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MaterialChipsAutocompleteComponent} from './material-chips-autocomplete/material-chips-autocomplete.component';
import {MaterialInputComponent} from './material-input/material-input.component';
import {MaterialInputAutocompleteComponent} from './material-input-autocomplete/material-input-autocomplete.component';
import {MaterialInputFormatNumberComponent} from './material-input-format-number/material-input-format-number.component';
import {MaterialNofilterInputAutocompleteComponent} from './material-nofilter-input-autocomplete/material-nofilter-input-autocomplete.component';
import {MaterialTagInputComponent} from './material-tag-input/material-tag-input.component';
import {MaterialModule} from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EtopPipesModule} from 'libs/shared/pipes/etop-pipes.module';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {registerLocaleData} from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatDialogTemplateComponent} from "./material-dialog/mat-dialog-template.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialYearPickerComponent } from './material-year-picker';
import { MaterialSelectDateRangeComponent } from './material-select-date-range';

registerLocaleData(localeVi);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EtopPipesModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgbModule,
  ],
  declarations: [
    MaterialChipsAutocompleteComponent,
    MaterialInputComponent,
    MaterialInputAutocompleteComponent,
    MaterialInputFormatNumberComponent,
    MaterialNofilterInputAutocompleteComponent,
    MaterialTagInputComponent,
    MaterialYearPickerComponent,
    MatDialogTemplateComponent,
    MaterialSelectDateRangeComponent
  ],
  exports: [
    MaterialChipsAutocompleteComponent,
    MaterialInputComponent,
    MaterialInputAutocompleteComponent,
    MaterialInputFormatNumberComponent,
    MaterialNofilterInputAutocompleteComponent,
    MaterialTagInputComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialYearPickerComponent,
    MaterialSelectDateRangeComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'vi'},
    DecimalPipe,
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EtopMaterialModule {

}
