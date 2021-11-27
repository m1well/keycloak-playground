import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { AdminRoleGuard } from '../../shared/guards/admin-role.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'list',
        component: ProductsListComponent
      },
      {
        path: 'admin',
        component: ProductsAdminComponent,
        // @ts-ignore
        canActivate: AdminRoleGuard,
        data: { roles: ['ADMIN'] }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
