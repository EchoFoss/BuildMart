import { v4 as uuidv4} from 'uuid'
export class ProdutoModel {
  public id: string
  public nomeProduto: string;
  public descricao: string;
  public preco: number;
  public createdAt: Date;
  public updatedAt: Date;


  private constructor(nomeProduto: string, descricao: string, preco: number) {
    let newId = uuidv4()
    let now: Date = new Date()
    this.id = newId;
    this.nomeProduto = nomeProduto;
    this.descricao = descricao;
    this.preco = preco;
    this.createdAt = now;
    this.updatedAt = now;
  }

  public static new(nomeProduto: string, descricao: string = "", preco: number): ProdutoModel {
    let createdProduto = new ProdutoModel(nomeProduto, descricao, preco)
    try {
      createdProduto.validate()
    } catch (err) {
      throw new Error(`Erro na validação do Produto: ${err}`)
    }

    return createdProduto;

  }

  public validate() {
    if (this.nomeProduto.length < 3 || this.nomeProduto.length > 255) {
      throw new Error("Tamanho inválido para o produto")
    }


    if (this.descricao.length > 1000) {
      throw new Error("Tamanho inválido para a descrição do produto")
    }

    if (this.preco <= 0) {
      throw new Error("Preço deve ser maior do que zero")
    }
  }


}
