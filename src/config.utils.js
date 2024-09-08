"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeRight = exports.fadeLeft = exports.fadeBottom = exports.fadeTop = exports.fadeY = exports.fadeX = void 0;
var fadeX = function (value) {
    return {
        "--padding": value,
        "--start-padding": "var(--padding, 0px)",
        "--stop-padding": "var(--padding, 0px)",
        "--mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--start-padding),\n                            white calc(100% - var(--stop-padding)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
exports.fadeX = fadeX;
var fadeY = function (value) {
    return {
        "--padding": value,
        "--start-padding": "var(--padding, 0px)",
        "--stop-padding": "var(--padding, 0px)",
        "--mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--start-padding),\n                            white calc(100% - var(--stop-padding)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
exports.fadeY = fadeY;
var fadeTop = function (value) {
    return {
        "--start-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
exports.fadeTop = fadeTop;
var fadeBottom = function (value) {
    return {
        "--stop-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
exports.fadeBottom = fadeBottom;
var fadeLeft = function (value) {
    return {
        "--start-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
exports.fadeLeft = fadeLeft;
var fadeRight = function (value) {
    return {
        "--stop-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
exports.fadeRight = fadeRight;
