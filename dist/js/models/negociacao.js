export class Negociacao {
    constructor(
    // nao precisamos declarar os atributos se eles estiverem sendo chamados no construtor
    _data, // o atributo date precisa ser trabalhado de um jeito diferente...
    quantidade, // agora o código está simplificado e quem é de fora da classe consegue acessar os dados apenas para leitura
    valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
