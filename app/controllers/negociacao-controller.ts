import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView", true);
  private mensagemView = new MensagemView("#mensagemView");
  constructor() {
    this.inputData = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      //chamando um método estático, não sendo necessário instanciar a classe
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update(
        "Apenas serão admitidas negociações realizadas em dias úteis!"
      );
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.updateView();
    console.log(this.negociacoes.lista());
    this.limparFormulario();
  }

  private criaNegociacao(): Negociacao {
    const date = new Date(this.inputData.value.replace(/-/g, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação realizada com sucesso!");
  }

  private ehDiaUtil(data: Date): boolean {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}
