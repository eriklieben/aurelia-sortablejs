System.register(["./sortable"], function (exports_1, context_1) {
    "use strict";
    var sortable_1;
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources(sortable_1.SortableCustomAttribute);
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (sortable_1_1) {
                sortable_1 = sortable_1_1;
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=index.js.map
