import {Injectable} from '@angular/core';
import {ProdutoModel} from "../../Models/Produto/produto-model";
import {AbstractServiceInterface} from "../abstract-service.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService implements AbstractServiceInterface<ProdutoModel>{

  public produtos: Map<string, ProdutoModel> = new Map<string, ProdutoModel>();

  constructor() { }

  add(input: ProdutoModel): void {
    this.produtos.set(input.id, input);
  }
  readAll(input: ProdutoModel): readonly ProdutoModel[] {
    return Array.from(this.produtos.values())
  }
  readById(id: string): ProdutoModel | null {

    const retrievedProduct = this.produtos.get(id);

    return retrievedProduct ?? null

  }
  update(input: ProdutoModel): void {

    this.produtos.set(input.id, input)
  }
  delete(id: string): void {
    this.produtos.delete(id)
  }
}
