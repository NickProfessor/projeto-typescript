export class Negociacao {
  #data;
  #quantidade;
  #valor;
  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  get data() {
    return this.#data; //é um GETTER, no caso vai retornar a data :D
  }
  get quantidade() {
    return this.#quantidade;
  }
  get valor() {
    return this.#valor;
  }

  get volume() {
    return this.#valor * this.#quantidade;
  }
}
