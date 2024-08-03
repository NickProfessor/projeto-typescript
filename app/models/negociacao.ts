export class Negociacao {
  constructor(
    // nao precisamos declarar os atributos se eles estiverem sendo chamados no construtor
    private _data: Date, // o atributo date precisa ser trabalhado de um jeito diferente...
    public readonly quantidade: number, // agora o código está simplificado e quem é de fora da classe consegue acessar os dados apenas para leitura
    public readonly valor: number
  ) {}

  public static criaDe(
    //métodos estáticos podem ser chamados sem a necessidade de criar uma instancia da classe
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const date = new Date(dataString.replace(/-/g, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
  public get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public get volume(): number {
    return this.valor * this.quantidade;
  }
}
