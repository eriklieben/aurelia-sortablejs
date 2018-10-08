import {LogManager} from 'aurelia-framework';
const log = LogManager.getLogger('multiple');
log.info('YES');

export class MultipleCustomElement {
  
  public sortableOptions = {
    group: 'photos',
    animation: 150,

		onUpdate: this.update.bind(this),
		onAdd: this.add.bind(this),
    onRemove: this.remove.bind(this),
		onStart: this.start.bind(this),
		onSort: this.sort.bind(this),
		onEnd: this.end.bind(this)    
  };
  
  public groupA = [
    'images/face-01.jpg',
    'images/face-02.jpg',
    'images/face-03.jpg',
    'images/face-04.jpg',
  ];

  public groupB = [
    'images/face-05.jpg',
    'images/face-06.jpg',
    'images/face-07.jpg',
  ];  

  public groupC = [
    'images/face-08.jpg',
    'images/face-09.jpg',
  ];

  public update(evt) {
    console.log('YOP');
    const list = evt.item.parentElement.id;
    log.info(`onUpdate: ${list} ${evt.oldIndex}`);
    var items = this[list].splice(evt.oldIndex, 1);
    this[list].splice(evt.newIndex, 0, ...items);   
  }

  public add(evt) {
    const from = evt.from.id;
    const to = evt.to.id;
    log.info(`onAdd: ${from} ${evt.oldIndex} => ${to} ${evt.newIndex}`);
    this[to].splice(evt.newIndex, 0, this[from][evt.oldIndex]);     
    evt.preventDefault();   
  }

  public remove(evt) {
    const from = evt.from.id;
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
