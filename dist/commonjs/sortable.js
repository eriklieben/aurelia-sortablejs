"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var Sortable = require("sortablejs");
var SortableCustomAttribute = (function () {
    function SortableCustomAttribute(element) {
        var _this = this;
        this.element = element;
        this.defaultOptions = {
            onAdd: function (event) { return _this.dispatch("on-add", event); },
            onEnd: function (event) { return _this.dispatch("on-end", event); },
            onFilter: function (event) { return _this.dispatch("on-filter", event); },
            onMove: function (event) { return _this.dispatch("on-move", event); },
            onRemove: function (event) { return _this.dispatch("on-remove", event); },
            onSort: function (event) { return _this.dispatch("on-sort", event); },
            onStart: function (event) { return _this.dispatch("on-start", event); },
            onUpdate: function (event) { return _this.dispatch("on-update", event); }
        };
    }
    SortableCustomAttribute.prototype.attached = function () {
        this.sortable = Sortable.create(this.element, Object.assign(this.defaultOptions, this.options || {}));
    };
    SortableCustomAttribute.prototype.detached = function () {
        this.sortable.destroy();
    };
    SortableCustomAttribute.prototype.dispatch = function (name, data) {
        this.element.dispatchEvent(new CustomEvent(name, {
            bubbles: true,
            detail: data,
        }));
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }), 
        __metadata('design:type', Object)
    ], SortableCustomAttribute.prototype, "options", void 0);
    SortableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element), 
        __metadata('design:paramtypes', [Element])
    ], SortableCustomAttribute);
    return SortableCustomAttribute;
}());
exports.SortableCustomAttribute = SortableCustomAttribute;

//# sourceMappingURL=sortable.js.map
