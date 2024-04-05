import { Routes } from '@angular/router';
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";
import {MainViewComponent} from "./main-view/main-view.component";
import {AdminViewComponent} from "./admin-view/admin-view.component";
import {PostProductComponent} from "./post-product/post-product.component";
import {GetAllProductsComponent} from "./get-all-products/get-all-products.component";
import {GetProductByIdComponent} from "./get-product-by-id/get-product-by-id.component";

export const routes: Routes = [
  {path: "", component: MainViewComponent},
  {path: "admin", component: AdminViewComponent},
  {path: "admin/post", component: PostProductComponent},
  {path: "admin/get", component: GetAllProductsComponent},
  {path: "admin/get/:id", component: GetProductByIdComponent},
  {path: "**", component: NotFoundComponentComponent}
];
