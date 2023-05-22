import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { EmopModule } from "emop-components-angular";  // *引入emop-components-angular组件
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TestComponent } from './test/test.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MyDDirective } from './my-d.directive';
import { MyCComponent } from './my-c/my-c.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MyDDirective,
    MyCComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
