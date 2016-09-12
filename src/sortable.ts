import { bindable, bindingMode, inject } from "aurelia-framework";
import * as Sortable from "sortablejs";

@inject(Element)
export class SortableCustomAttribute {

  @bindable({ defaultBindingMode: bindingMode.oneTime })
  public options;

  private sortable: Sortable;

  private defaultOptions = {
      onAdd: event => this.dispatch("on-add", event),
      onEnd:  event => this.dispatch("on-end", event),
      onFilter: event => this.dispatch("on-filter", event),
      onMove: event => this.dispatch("on-move", event),
      onRemove: event => this.dispatch("on-remove", event),
      onSort: event => this.dispatch("on-sort", event),
      onStart: event => this.dispatch("on-start", event),
      onUpdate: event => this.dispatch("on-update", event),
      setData: (dataTransfer, dragEl) => this.dispatch("set-data", { dataTransfer, dragEl }),
    };

  constructor(private element: Element) { }

  public attached() {
    this.sortable = Sortable.create(this.element, Object.assign(this.defaultOptions, this.options || {}));
  }

  public detached() {
    this.sortable.destroy();
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

