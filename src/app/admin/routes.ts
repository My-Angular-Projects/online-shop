import { AdminLayoutComponent } from './shered/admin-layout/admin-layout.component';
import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'add', component: AddPageComponent },
      { path: 'orders', component: OrdersPageComponent },
      { path: 'product/:id/edit', component: EditPageComponent },
    ],
  },
];
