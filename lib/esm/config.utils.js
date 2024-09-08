export var fadeX = function (value) {
    return {
        "--padding": value,
        "--start-padding": "var(--padding, 0px)",
        "--stop-padding": "var(--padding, 0px)",
        "--mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--start-padding),\n                            white calc(100% - var(--stop-padding)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
export var fadeY = function (value) {
    return {
        "--padding": value,
        "--start-padding": "var(--padding, 0px)",
        "--stop-padding": "var(--padding, 0px)",
        "--mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--start-padding),\n                            white calc(100% - var(--stop-padding)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
export var fadeTop = function (value) {
    return {
        "--start-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
export var fadeBottom = function (value) {
    return {
        "--stop-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
export var fadeLeft = function (value) {
    return {
        "--start-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
export var fadeRight = function (value) {
    return {
        "--stop-padding": value,
        "--mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--start-padding, 0px),\n                            white calc(100% - var(--stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--mask-gradient)",
        maskImage: "var(--mask-gradient)",
    };
};
