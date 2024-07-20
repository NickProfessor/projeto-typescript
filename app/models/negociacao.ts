export class Negociacao {
  constructor(
    // nao precisamos declarar os atributos se eles estiverem sendo chamados no construtor
    private _data: Date, // o atributo date precisa ser trabalhado de um jeito diferente...
    public readonly quantidade: number, // agora o código está simplificado e quem é de fora da classe consegue acessar os dados apenas para leitura
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.valor * this.quantidade;
  }
}
