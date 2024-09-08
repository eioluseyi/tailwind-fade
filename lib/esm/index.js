import plugin from "tailwindcss/plugin";
import { fadeBottom, fadeLeft, fadeRight, fadeTop, fadeX, fadeY, } from "./config.utils";
export default plugin(function (_a) {
    var matchUtilities = _a.matchUtilities, theme = _a.theme;
    matchUtilities({
        "fade-x": fadeX,
        "fade-y": fadeY,
        "fade-t": fadeTop,
        "fade-b": fadeBottom,
        "fade-l": fadeLeft,
        "fade-r": fadeRight,
    }, {
        values: theme("spacing"),
    });
});
