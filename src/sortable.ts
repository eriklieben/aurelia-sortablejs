import { inject } from "aurelia-framework";
import * as Sortable from "sortablejs";

@inject(Element)
export class SortableCustomAttribute {

  private sortable;

  constructor(private element: Element) { }

  public detached() {
    this.sortable.destroy();
  }

  public attached() {
    if (!this.sortable) {
      this.sortable = Sortable.create(this.element, {});
    }
  }

  public valueChanged(newValue) {
    if (this.sortable) {
      this.sortable.destroy();
    }

    this.sortable = Sortable.create(this.element, Object.assign({}, newValue || {}));
    this.attachListeners();
  }

  private attachListeners() {
    Sortable.utils.on(this.element, "add", event => this.dispatch("sortable-add", event));
    Sortable.utils.on(this.element, "end", event => this.dispatch("sortable-end", event));
    Sortable.utils.on(this.element, "filter", event => this.dispatch("sortable-filter", event));
    Sortable.utils.on(this.element, "move", event => this.dispatch("sortable-move", event));
    Sortable.utils.on(this.element, "remove", event => this.dispatch("sortable-remove", event));
    Sortable.utils.on(this.element, "sort", event => this.dispatch("sortable-sort", event));
    Sortable.utils.on(this.element, "start", event => this.dispatch("sortable-start", event));
    Sortable.utils.on(this.element, "update", event => this.dispatch("sortable-update", event));
  }

  private  dispatch(name, data) {
    this.element.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        detail: data,
      })
    );
  }
}

