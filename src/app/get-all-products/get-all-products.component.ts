import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../useCases/productUseCases/products-service.service";
import {ProdutoModel} from "../Models/Produto/produto-model";
import {FormsModule} from "@angular/forms";
import {PostProductComponent} from "../post-product/post-product.component";

@Component({
  selector: 'app-get-all-products',
  standalone: true,
  imports: [
    FormsModule,
    PostProductComponent
  ],
  templateUrl: './get-all-products.component.html',
  styleUrl: './get-all-products.component.scss'
})
export class GetAllProductsComponent {
  public useCase: ProductsService;

  public allProducts: readonly ProdutoModel[]
  constructor(useCase: ProductsService) {
    this.useCase = useCase
    this.allProducts = this.useCase.readAll()
  }

  deletar(id: string) {
    this.useCase.delete(id);
  }

  atualizar(input: ProdutoModel) {
    this.useCase.update(input);
  }

}
