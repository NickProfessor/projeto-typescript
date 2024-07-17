export class Negociacao {
  private _data: Date;
  private _quantidade: number;
  private _valor: number;
  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data(): Date {
    return this._data; //é um GETTER, no caso vai retornar a data :D
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._valor * this._quantidade;
  }
}
