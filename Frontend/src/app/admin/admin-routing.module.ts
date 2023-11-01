import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { OrderComponent } from './orders/order/order.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { UserComponent } from './users/user/user.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add-product', component: AddProductComponent },
      { path: 'products/edit-product/:id', component: EditProductComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/order/:id', component: OrderComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/user/:id', component: UserComponent },
      { path: 'users/add-user', component: AddUserComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'users/add-user', component: AddUserComponent },
    ],
  },
  { path: 'admin/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
