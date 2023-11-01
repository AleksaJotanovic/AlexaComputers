import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { TotalSalesComponent } from './admin/dashboard/total-sales/total-sales.component';
import { TotalOrdersComponent } from './admin/dashboard/total-orders/total-orders.component';
import { TotalProductsComponent } from './admin/dashboard/total-products/total-products.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { LatestOrdersComponent } from './admin/dashboard/latest-orders/latest-orders.component';
import { OrderComponent } from './admin/orders/order/order.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { UserComponent } from './admin/users/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { CtgIfPipe } from './pipes/ctg-if.pipe';
import { PtIfPipe } from './pipes/pt-if.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CtgFilterPipe } from './pipes/ctg-filter.pipe';
import { PublishedFilterPipe } from './pipes/published-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { StockFilterPipe } from './pipes/stock-filter.pipe';
import { RoleFilterPipe } from './pipes/role-filter.pipe';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { CategoriesFormComponent } from './admin/categories/categories-form/categories-form.component';
import { CategoriesTableComponent } from './admin/categories/categories-table/categories-table.component';
import { AddFormComponent } from './admin/add-product/add-form/add-form.component';
import { ProductsTableComponent } from './admin/products/products-table/products-table.component';
import { AddUserFormComponent } from './admin/users/add-user/add-user-form/add-user-form.component';
import { UsersTableComponent } from './admin/users/users-table/users-table.component';
import { OrdersTableComponent } from './admin/orders/orders-table/orders-table.component';
import { OrderDetailsComponent } from './admin/orders/order/order-details/order-details.component';
import { PdfInvoiceComponent } from './admin/orders/order/pdf-invoice/pdf-invoice.component';
import { ItemsComponent } from './admin/orders/order/items/items.component';
import { PdfDetailsComponent } from './admin/orders/order/pdf-details/pdf-details.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    ClientHeaderComponent,
    ClientHomeComponent,
    ClientFooterComponent,
    AdminHeaderComponent,
    DashboardComponent,
    SidebarComponent,
    TotalSalesComponent,
    TotalOrdersComponent,
    TotalProductsComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    UsersComponent,
    ConfigurationComponent,
    AddProductComponent,
    LatestOrdersComponent,
    OrderComponent,
    AddUserComponent,
    UserComponent,
    EditProductComponent,
    CtgIfPipe,
    PtIfPipe,
    SearchFilterPipe,
    CtgFilterPipe,
    PublishedFilterPipe,
    PriceFilterPipe,
    StockFilterPipe,
    RoleFilterPipe,
    UserSearchPipe,
    CategoriesFormComponent,
    CategoriesTableComponent,
    AddFormComponent,
    ProductsTableComponent,
    AddUserFormComponent,
    UsersTableComponent,
    OrdersTableComponent,
    OrderDetailsComponent,
    PdfInvoiceComponent,
    ItemsComponent,
    PdfDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    ClientRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
