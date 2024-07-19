export class Negociacoes {
    constructor() {
        this.negociacoes = []; //lista que vai armazenar as negociações
    }
    adiciona(negociacao) {
        // método capaz de adicionar uma negociao a lista de negociacoes
        this.negociacoes.push(negociacao); // menciona a lista de negociacoes da instancia, e através do método push adiciona mais uma negociacao
    }
    lista() {
        // método capaz de trazer a lista de negociações
        return this.negociacoes; // retorna a lista de negociacoes
    }
}
