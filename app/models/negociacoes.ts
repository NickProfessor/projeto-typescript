import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []; //lista que vai armazenar as negociações

  adiciona(negociacao: Negociacao) {
    // método capaz de adicionar uma negociao a lista de negociacoes
    this.negociacoes.push(negociacao); // menciona a lista de negociacoes da instancia, e através do método push adiciona mais uma negociacao
  }

  lista(): ReadonlyArray<Negociacao> {
    // método capaz de trazer a lista de negociações apenas para leitura, sem possibilidade de alteração
    return this.negociacoes; // retorna a lista de negociacoes
  }
}
