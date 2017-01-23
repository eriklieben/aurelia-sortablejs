var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "sortablejs"], function (require, exports, aurelia_framework_1, Sortable) {
    "use strict";
    var SortableCustomAttribute = (function () {
        function SortableCustomAttribute(element) {
            this.element = element;
            this.sortableOptions = {};
        }
        SortableCustomAttribute.prototype.detached = function () {
            this.sortable.destroy();
        };
        SortableCustomAttribute.prototype.attached = function () {
            if (!this.sortable) {
                this.sortable = Sortable.create(this.element, this.sortableOptions);
            }
        };
        SortableCustomAttribute.prototype.valueChanged = function (newValue) {
            if (this.sortable) {
                this.sortable.destroy();
            }
            this.sortable = Sortable.create(this.element, Object.assign({}, newValue || {}));
            this.attachListeners();
        };
        SortableCustomAttribute.prototype.attachListeners = function () {
            var _this = this;
            Sortable.utils.on(this.element, "add", function (event) { return _this.dispatch("sortable-add", event); });
            Sortable.utils.on(this.element, "end", function (event) { return _this.dispatch("sortable-end", event); });
            Sortable.utils.on(this.element, "filter", function (event) { return _this.dispatch("sortable-filter", event); });
            Sortable.utils.on(this.element, "move", function (event) { return _this.dispatch("sortable-move", event); });
            Sortable.utils.on(this.element, "remove", function (event) { return _this.dispatch("sortable-remove", event); });
            Sortable.utils.on(this.element, "sort", function (event) { return _this.dispatch("sortable-sort", event); });
            Sortable.utils.on(this.element, "start", function (event) { return _this.dispatch("sortable-start", event); });
            Sortable.utils.on(this.element, "update", function (event) { return _this.dispatch("sortable-update", event); });
        };
        SortableCustomAttribute.prototype.dispatch = function (name, data) {
            this.element.dispatchEvent(new CustomEvent(name, {
                bubbles: true,
                detail: data,
            }));
        };
        return SortableCustomAttribute;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], SortableCustomAttribute.prototype, "sortableOptions", void 0);
    SortableCustomAttribute = __decorate([
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], SortableCustomAttribute);
    exports.SortableCustomAttribute = SortableCustomAttribute;
});

//# sourceMappingURL=sortable.js.map
