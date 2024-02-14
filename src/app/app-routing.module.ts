import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  /*{ path: '', component: ProductPageComponent },*/
  { path: '', component: ProductComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}