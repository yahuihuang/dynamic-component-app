import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatureRoutingModule } from './signature-routing.module';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignatureRoutingModule
  ],
  declarations: [
    SignComponent
  ],
})
export class Signature2Module { }
