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
    static criaDe(
    //métodos estáticos podem ser chamados sem a necessidade de criar uma instancia da classe
    dataString, quantidadeString, valorString) {
        const date = new Date(dataString.replace(/-/g, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
