import {Component, Input, OnInit} from '@angular/core';
import {AbstractServiceInterface} from "../useCases/abstract-service.interface";
import {ProdutoModel} from "../Models/Produto/produto-model";
import {ProductsService} from "../useCases/productUseCases/products-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-post-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.scss'
})
export class PostProductComponent {
  public useCase: ProductsService
  @Input() nameProduto: string = "";
  @Input() descricao: string = "";
  @Input() preco: number = 0;
  constructor(useCase: ProductsService) {
    this.useCase = useCase;

  }

  submit(): void {
    try {
      const newProduct = ProdutoModel.new(this.nameProduto, this.descricao, this.preco);
      this.useCase.add(newProduct)
      console.log(newProduct)
    } catch (e) {
      console.log(e)
    }
  }

}
