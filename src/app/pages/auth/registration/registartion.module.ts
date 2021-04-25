import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([{ path: '', component: RegistrationComponent }]),
  ],
  declarations: [RegistrationComponent]
})
export class RegistartionModule { }
