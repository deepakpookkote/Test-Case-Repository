import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CounterComponent } from './counter/counter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { HelloDirective } from './directive-test/hello.directive';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { SqurePipe } from './pipe-test/squre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CounterComponent,
    ProductListComponent,
    DirectiveTestComponent,
    HelloDirective,
    PipeTestComponent,
    SqurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
