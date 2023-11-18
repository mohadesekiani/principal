import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ElementsModule } from './elements/elements.module';

const SHARED_MODULES = [
  CommonModule,
  NgIf,
  MaterialModule,
  ReactiveFormsModule,
  FormsModule,
  ElementsModule
];

@NgModule({
  declarations: [],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES,],
})
export class SharedModule { }
