[![Build Status](https://dev.azure.com/erik/aurelia-sortablejs/_apis/build/status/eriklieben.aurelia-sortablejs)](https://dev.azure.com/erik/aurelia-sortablejs/_build/latest?definitionId=12)

# aurelia-sortablejs

Aurelia plugin to use the [sortablejs](https://github.com/rubaxa/Sortable) library.

# Installation

## Aurelia-CLI (RequireJS)

Install the package:
```
au install aurelia-sortablejs
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

## Aurelia-CLI (SystemJS)

Install the package:
```
au install aurelia-sortablejs
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

## Aurelia-CLI (Webpack)

Install the package:
```
yarn add aurelia-sortablejs
```

Add the following line to ```src/main.js``` or ```src/main.ts```:
```diff
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources'))
+   .plugin(PLATFORM.moduleName('aurelia-sortablejs'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }
```

## Usage:
```html
<ul sortable.bind="options">
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
```

Each event can be used in the following way:

```html
<ul sortable.bind="options" sortable-move.delegate="func($event)">
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
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

| Attribute        | Sortablejs event | Description 
| ---------------- | ---------------- | --------------
| sortable-add     | onAdd            | Element is dropped into the list from another list
| sortable-end     | onEnd            | Dragging ended 
| sortable-filter  | onFilter         | Attempt to drag a filtered element
| sortable-move    | onMove           | Event when you move an item in the list or between lists 
| sortable-remove  | onRemove         | Element is removed from the list into another list 
| sortable-sort    | onSort           | Called by any change to the list (add / update / remove) 
| sortable-start   | onStart          | Dragging started 
| sortable-update  | onUpdate         | Changed sorting within list
