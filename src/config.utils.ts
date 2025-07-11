export const fadeX = (value: any) => {
  return {
    "--eio-twf-padding": value,
    "--eio-twf-start-padding": "var(--eio-twf-padding, 0px)",
    "--eio-twf-stop-padding": "var(--eio-twf-padding, 0px)",
    "--eio-twf-mask-gradient": `linear-gradient(
                            to right,
                            transparent,
                            white var(--eio-twf-start-padding),
                            white calc(100% - var(--eio-twf-stop-padding)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
    maskImage: "var(--eio-twf-mask-gradient)",
  };
};

export const fadeY = (value: any) => {
  return {
    "--eio-twf-padding": value,
    "--eio-twf-start-padding": "var(--eio-twf-padding, 0px)",
    "--eio-twf-stop-padding": "var(--eio-twf-padding, 0px)",
    "--eio-twf-mask-gradient": `linear-gradient(
                            to bottom,
                            transparent,
                            white var(--eio-twf-start-padding),
                            white calc(100% - var(--eio-twf-stop-padding)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
    maskImage: "var(--eio-twf-mask-gradient)",
  };
};

export const fadeTop = (value: any) => {
  return {
    "--eio-twf-start-padding": value,
    "--eio-twf-mask-gradient": `linear-gradient(
                            to bottom,
                            transparent,
                            white var(--eio-twf-start-padding, 0px),
                            white calc(100% - var(--eio-twf-stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
    maskImage: "var(--eio-twf-mask-gradient)",
  };
};

export const fadeBottom = (value: any) => {
  return {
    "--eio-twf-stop-padding": value,
    "--eio-twf-mask-gradient": `linear-gradient(
                            to bottom,
                            transparent,
                            white var(--eio-twf-start-padding, 0px),
                            white calc(100% - var(--eio-twf-stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
    maskImage: "var(--eio-twf-mask-gradient)",
  };
};

export const fadeLeft = (value: any) => {
  return {
    "--eio-twf-start-padding": value,
    "--eio-twf-mask-gradient": `linear-gradient(
                            to right,
                            transparent,
                            white var(--eio-twf-start-padding, 0px),
                            white calc(100% - var(--eio-twf-stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
    maskImage: "var(--eio-twf-mask-gradient)",
  };
};

export const fadeRight = (value: any) => {
  return {
    "--eio-twf-stop-padding": value,
    "--eio-twf-mask-gradient": `linear-gradient(
                            to right,
                            transparent,
                            white var(--eio-twf-start-padding, 0px),
                            white calc(100% - var(--eio-twf-stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--eio-twf-mask-gradient)",
    maskImage: "var(--eio-twf-mask-gradient)",
  };
};
