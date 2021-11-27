import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsAdminComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {
}
