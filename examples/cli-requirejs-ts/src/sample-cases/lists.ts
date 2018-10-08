import {LogManager} from 'aurelia-framework';
const log = LogManager.getLogger('lists');

export class ListsCustomElement {
  public itemList1 = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7'];
  public itemList2 = ['item 8', 'item 9', 'item 10', 'item 11'];
 
  public sortableOptions = {
		group: "words",
		animation: 150,
		store: {
			get: function (sortable) {
        var order = localStorage.getItem(sortable.options.group);
				return order ? order.split('|') : [];
			},
			set: function (sortable) {
        var order = sortable.toArray();
				localStorage.setItem(sortable.options.group, order.join('|'));
			}
		},
		onUpdate: this.update.bind(this),
		onAdd: this.add.bind(this),
    onRemove: this.remove.bind(this),
		onStart: this.start.bind(this),
		onSort: this.sort.bind(this),
		onEnd: this.end.bind(this)
  }

  public update(evt) {
    const list = evt.item.parentElement.getAttribute('data-item-list');
    log.info(`onUpdate: ${list} ${evt.oldIndex}`);
    var items = this[list].splice(evt.oldIndex, 1);
    this[list].splice(evt.newIndex, 0, ...items);   
  }

  public add(evt) {
    const from = evt.from.getAttribute('data-item-list');
    const to = evt.to.getAttribute('data-item-list');
    log.info(`onAdd: ${from} ${evt.oldIndex} => ${to} ${evt.newIndex}`);
    this[to].splice(evt.newIndex, 0, this[from][evt.oldIndex]);     
    evt.preventDefault();   
  }

  public remove(evt) {
    const from = evt.from.getAttribute('data-item-list');
    log.info(`onRemove: ${from} ${evt.oldIndex}`);
    this[from].splice(evt.oldIndex, 1);
    evt.preventDefault();   
  }

  public start(evt) {
    log.info('onStart:', evt.newIndex, evt.oldIndex);
  }

  public sort(evt) {
    log.info('onSort:', evt.newIndex, evt.oldIndex);
  }

  public end(evt) {
    log.info('onEnd:', evt.newIndex, evt.oldIndex);
  }

}
