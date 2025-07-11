export var fadeX = function (value) {
    return {
        "--eio-twf-padding": value,
        "--eio-twf-start-padding": "var(--eio-twf-padding, 0px)",
        "--eio-twf-stop-padding": "var(--eio-twf-padding, 0px)",
        "--eio-twf-mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--eio-twf-start-padding),\n                            white calc(100% - var(--eio-twf-stop-padding)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
        maskImage: "var(--eio-twf-mask-gradient)",
    };
};
export var fadeY = function (value) {
    return {
        "--eio-twf-padding": value,
        "--eio-twf-start-padding": "var(--eio-twf-padding, 0px)",
        "--eio-twf-stop-padding": "var(--eio-twf-padding, 0px)",
        "--eio-twf-mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--eio-twf-start-padding),\n                            white calc(100% - var(--eio-twf-stop-padding)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
        maskImage: "var(--eio-twf-mask-gradient)",
    };
};
export var fadeTop = function (value) {
    return {
        "--eio-twf-start-padding": value,
        "--eio-twf-mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--eio-twf-start-padding, 0px),\n                            white calc(100% - var(--eio-twf-stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
        maskImage: "var(--eio-twf-mask-gradient)",
    };
};
export var fadeBottom = function (value) {
    return {
        "--eio-twf-stop-padding": value,
        "--eio-twf-mask-gradient": "linear-gradient(\n                            to bottom,\n                            transparent,\n                            white var(--eio-twf-start-padding, 0px),\n                            white calc(100% - var(--eio-twf-stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
        maskImage: "var(--eio-twf-mask-gradient)",
    };
};
export var fadeLeft = function (value) {
    return {
        "--eio-twf-start-padding": value,
        "--eio-twf-mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--eio-twf-start-padding, 0px),\n                            white calc(100% - var(--eio-twf-stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
        maskImage: "var(--eio-twf-mask-gradient)",
    };
};
export var fadeRight = function (value) {
    return {
        "--eio-twf-stop-padding": value,
        "--eio-twf-mask-gradient": "linear-gradient(\n                            to right,\n                            transparent,\n                            white var(--eio-twf-start-padding, 0px),\n                            white calc(100% - var(--eio-twf-stop-padding, 0px)),\n                            transparent\n                          )",
        "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
        maskImage: "var(--eio-twf-mask-gradient)",
    };
};
