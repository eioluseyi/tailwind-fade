import plugin from "tailwindcss/plugin";
import { fadeBottom, fadeLeft, fadeRight, fadeTop, fadeX, fadeY, } from "./config.utils";
export default plugin.withOptions(function (options) {
    if (options === void 0) { options = {}; }
    var prefix = options.prefix || "";
    return function (_a) {
        var _b;
        var matchUtilities = _a.matchUtilities, theme = _a.theme;
        matchUtilities((_b = {},
            _b["".concat(prefix, "fade-x")] = fadeX,
            _b["".concat(prefix, "fade-y")] = fadeY,
            _b["".concat(prefix, "fade-t")] = fadeTop,
            _b["".concat(prefix, "fade-b")] = fadeBottom,
            _b["".concat(prefix, "fade-l")] = fadeLeft,
            _b["".concat(prefix, "fade-r")] = fadeRight,
            _b), {
            values: theme("spacing"),
        });
    };
}, function () { return ({ name: "eio-tailwind-fade" }); });
