"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var config_utils_1 = require("./config.utils");
exports.default = plugin_1.default.withOptions(function (options) {
    if (options === void 0) { options = {}; }
    var prefix = options.prefix || "";
    return function (_a) {
        var _b;
        var matchUtilities = _a.matchUtilities, theme = _a.theme;
        matchUtilities((_b = {},
            _b["".concat(prefix, "fade-x")] = config_utils_1.fadeX,
            _b["".concat(prefix, "fade-y")] = config_utils_1.fadeY,
            _b["".concat(prefix, "fade-t")] = config_utils_1.fadeTop,
            _b["".concat(prefix, "fade-b")] = config_utils_1.fadeBottom,
            _b["".concat(prefix, "fade-l")] = config_utils_1.fadeLeft,
            _b["".concat(prefix, "fade-r")] = config_utils_1.fadeRight,
            _b), {
            values: theme("spacing"),
        });
    };
}, function () { return ({ name: "eio-tailwind-fade" }); });
