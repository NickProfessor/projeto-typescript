import { Negociacao } from "./models/negociacao.js";
alert("welcome to the mato");

const negociacao = new Negociacao(new Date());
negociacao.quantidade = 2;
console.log(negociacao.quantidade);
