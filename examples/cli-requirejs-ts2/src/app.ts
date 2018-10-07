export class App {
  message = 'Hello World!';

  public itemList1 = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7'];
  public itemList2 = ['item 8', 'item 9', 'item 10', 'item 11'];

  public multipleWordListOptions = {
		group: "words",
		//animation: 150,
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
		onUpdate: (evt) => { 
      const list = evt.item.parentElement.getAttribute('data-item-list');
      console.log(`onUpdate: ${list} ${evt.oldIndex}`);

      var items = this[list].splice(evt.oldIndex, 1);
      this[list].splice(evt.newIndex, 0, ...items);
    },
		onAdd: (evt) => {     
      const from = evt.from.getAttribute('data-item-list');
      const to = evt.to.getAttribute('data-item-list');
      console.log(`onAdd: ${from} ${evt.oldIndex} => ${to} ${evt.newIndex}`);
      this[to].splice(evt.newIndex, 0, this[from][evt.oldIndex]);     
      evt.preventDefault();
    },
    onRemove: (evt) => {
      const from = evt.from.getAttribute('data-item-list');
      console.log(`onRemove: ${from} ${evt.oldIndex}`);
      this[from].splice(evt.oldIndex, 1);
      evt.preventDefault();
    },
		onStart: (evt) => { 
      console.log('onStart.foo:', evt.newIndex, evt.oldIndex);
    },
		onSort: (evt) => { 
      console.log('onStart.foo:', evt.newIndex, evt.oldIndex);
    },
		onEnd: (evt) => { 
      console.log('onEnd.foo:', evt.newIndex, evt.oldIndex);
    }
  }

  public multiplePhotoOptions = {
		animation: 150,
		draggable: '.tile',
		handle: '.tile__name'
	};

  public multipleTitleOptions = {
    group: 'photo',
    animation: 150
  };

  public editableListOptions = {
		animation: 150,
		filter: '.js-remove',
		onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
		}
  };
  
  public users = ["user 1", "user 2", "user 3"];

  public addUser() {
    this.users.push("user " + (this.users.length + 1));
  }

}

