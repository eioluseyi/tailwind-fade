"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("tailwindcss/plugin");
var config_utils_1 = require("./config.utils");
exports.default = (0, plugin_1.default)(function (_a) {
    var matchUtilities = _a.matchUtilities, theme = _a.theme;
    matchUtilities({
        "fade-x": config_utils_1.fadeX,
        "fade-y": config_utils_1.fadeY,
        "fade-t": config_utils_1.fadeTop,
        "fade-b": config_utils_1.fadeBottom,
        "fade-l": config_utils_1.fadeLeft,
        "fade-r": config_utils_1.fadeRight,
    }, {
        values: theme("spacing"),
    });
});
