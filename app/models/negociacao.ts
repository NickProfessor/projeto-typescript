export class Negociacao {
  private _data;
  private _quantidade;
  private _valor;
  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data() {
    return this._data; //é um GETTER, no caso vai retornar a data :D
  }
  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }

  get volume() {
    return this._valor * this._quantidade;
  }
}
