import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// imports do materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormButtonsComponent } from './components/form-buttons/form-buttons.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({

    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  declarations: [
    SideBarComponent,
    FormButtonsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatTooltipModule,
    RouterModule,
    MatMenuModule,
   
  ],
  //exportar para usar os modulos do materials onde for solicitado
  exports: [
    MatFormFieldModule,
    MatCommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    SideBarComponent,
    MatMenuModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    FormButtonsComponent,
    MatTableModule
  ],
})
export class SharedModule { }
