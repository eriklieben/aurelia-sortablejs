# aurelia-sortablejs

Aurelia plugin to use the [sortablejs](https://github.com/rubaxa/Sortable) library.

# Installation

## JSPM
Install the package:
```
jspm i npm:aurelia-sortablejs
```

Add the following line to ```src/main.js``` or ```src/main.ts```:
```diff
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
+    .plugin("aurelia-sortable");
```
## Aurelia-CLI
Install the package:
```
npm i aurelia-sortablejs sortablejs --save
```

Open up the file ```aurelia_project/aurelia.json``` and add the following in the bundles, vender-bundle.js dependencies section:
```diff
{
  "name": "sortablejs",
  "path": "../node_modules/sortablejs/",
  "main": "sortable"
},
{
  "name": "aurelia-sortablejs",
  "path": "../node_modules/aurelia-sortablejs/dist/amd",
  "main": "index"
},
```
Add the following line to ```src/main.js``` or ```src/main.ts```:
```diff
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
+    .plugin('aurelia-sortablejs');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }
```
## Usage:
```html
<div sortable="options.bind: options" />
```

Each event can be used in the following way:

```html
<div sortable="options.bind: options" on-move.delegate="func($event)" />
```

```javascript
export class Home {
  public func(customEvent: CustomEvent) {
    let event = customEvent.detail;
    console.log("event", event);
  }
}
```

## sortable
The following attributes can be set to catch events

| Attribute  | Sortablejs event | Description 
| ---------- | ---------------- | --------------
| on-add     | onAdd            | Element is dropped into the list from another list
| on-end     | onEnd            | Dragging ended 
| on-filter  | onFilter         | Attempt to drag a filtered element
| on-move    | onMove           | Event when you move an item in the list or between lists 
| on-remove  | onRemove         | Element is removed from the list into another list 
| on-sort    | onSort           | Called by any change to the list (add / update / remove) 
| on-start   | onStart          | Dragging started 
| on-update  | onUpdate         | Changed sorting within list

When events are specified in the options property the override the above events.