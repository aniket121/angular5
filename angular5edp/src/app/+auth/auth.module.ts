import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {routing} from "./auth.routing";
import { AuthComponent } from './auth.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    routing,
  ],
  declarations: [ AuthComponent]
})
export class AuthModule { }
