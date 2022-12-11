import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatureRoutingModule } from './signature-routing.module';
import { SignComponent } from './sign/sign.component';


@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    SignatureRoutingModule
  ]
})
export class Signature2Module { }
