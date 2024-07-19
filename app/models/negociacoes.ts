import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []; //lista que vai armazenar as negociações

  adiciona(negociacao: Negociacao) {
    // método capaz de adicionar uma negociao a lista de negociacoes
    this.negociacoes.push(negociacao); // menciona a lista de negociacoes da instancia, e através do método push adiciona mais uma negociacao
  }

  lista(): Array<Negociacao> {
    // método capaz de trazer a lista de negociações
    return this.negociacoes; // retorna a lista de negociacoes
  }
}
