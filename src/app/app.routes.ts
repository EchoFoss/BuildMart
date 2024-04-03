import { Routes } from '@angular/router';
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";

export const routes: Routes = [
  // {path: "/", component: }
  {path: "**", component: NotFoundComponentComponent}
];
