import {Injectable} from '@angular/core';
import {ProdutoModel} from "../../Models/Produto/produto-model";
import {AbstractServiceInterface} from "../abstract-service.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements AbstractServiceInterface<ProdutoModel>{

  public produtos: Array<ProdutoModel> = [];

  add(input: ProdutoModel): void {
    this.produtos.push(input)
  }
  readAll(): readonly ProdutoModel[] {
    return this.produtos
  }
  readById(productId: string): ProdutoModel | null {

    const retrievedProduct =
      this.produtos.find((produto) => produto.id === productId)

    return retrievedProduct ?? null

  }
  update(input: ProdutoModel): void {

    const productIndex =
      this.produtos.findIndex((produto) => produto.id === input.id)

    this.produtos[productIndex] = input
  }
  delete(id: string): void {
    const index = this.produtos.findIndex((produto) => produto.id === id);
    this.produtos.splice(index, 1)
  }
}
