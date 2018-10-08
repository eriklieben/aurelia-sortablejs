export class EditableListCustomElement {

  public users = ["user 1", "user 2", "user 3"];

  public sortableOptions = {
		animation: 150,
		filter: '.js-remove',
		onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
		}
  };
  
  public addUser() {
    this.users.push("user " + (this.users.length + 1));
  } 
}
