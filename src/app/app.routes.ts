import { Routes } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { ProductPageComponent } from './containers/product-page/product-page.component';
import { CategoryPageComponent } from './containers/category-page/category-page.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'category',
    component: CategoryPageComponent,
  },
];
