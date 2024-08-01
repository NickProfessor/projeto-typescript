export abstract class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  abstract template(model: T): string;

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }
}

// essa classe é basicamente um modelo para as classes "parecidas" copiarem sua estrutura básica.

// uma classe abstrata não consegue ser instanciada DIRETAMENTE!

// um método abstrato faz com que a classe filha seja obrigada a chamar esse método em algum momento
