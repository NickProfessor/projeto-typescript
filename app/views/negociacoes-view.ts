import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;
  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }
  template(model: Negociacoes): string {
    return `
            <table class="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map((negociacao) => {
                      return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(
                                  negociacao.data
                                )}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                        `;
                    })}
                </tbody>
            </table>
        `;
  }

  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model);
  }
}
