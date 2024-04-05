import { TestBed } from '@angular/core/testing';

import { ProductsServiceService } from './products-service.service';
import {ProdutoModel} from "../../Models/Produto/produto-model";

describe('ProductsServiceService', () => {
  let service: ProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should insert data into the hashmap', () => {
    const newProduct = ProdutoModel.new("Martelo", "Alguma coisa", 20)
    service.add(newProduct)

    expect(service.readById(newProduct.id)).toBe(newProduct)
  })
});
