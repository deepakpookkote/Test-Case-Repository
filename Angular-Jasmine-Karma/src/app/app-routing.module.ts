import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CounterComponent } from './counter/counter.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';


const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'directive', component: DirectiveTestComponent },
  { path: 'pipe', component: PipeTestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
