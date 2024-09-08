export const fadeX = (value: any) => {
  return {
    "--padding": value,
    "--start-padding": "var(--padding, 0px)",
    "--stop-padding": "var(--padding, 0px)",
    "--mask-gradient": `linear-gradient(
                            to right,
                            transparent,
                            white var(--start-padding),
                            white calc(100% - var(--stop-padding)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--mask-gradient)",
    maskImage: "var(--mask-gradient)",
  };
};

export const fadeY = (value: any) => {
  return {
    "--padding": value,
    "--start-padding": "var(--padding, 0px)",
    "--stop-padding": "var(--padding, 0px)",
    "--mask-gradient": `linear-gradient(
                            to bottom,
                            transparent,
                            white var(--start-padding),
                            white calc(100% - var(--stop-padding)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--mask-gradient)",
    maskImage: "var(--mask-gradient)",
  };
};

export const fadeTop = (value: any) => {
  return {
    "--start-padding": value,
    "--mask-gradient": `linear-gradient(
                            to bottom,
                            transparent,
                            white var(--start-padding, 0px),
                            white calc(100% - var(--stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--mask-gradient)",
    maskImage: "var(--mask-gradient)",
  };
};

export const fadeBottom = (value: any) => {
  return {
    "--stop-padding": value,
    "--mask-gradient": `linear-gradient(
                            to bottom,
                            transparent,
                            white var(--start-padding, 0px),
                            white calc(100% - var(--stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--mask-gradient)",
    maskImage: "var(--mask-gradient)",
  };
};

export const fadeLeft = (value: any) => {
  return {
    "--start-padding": value,
    "--mask-gradient": `linear-gradient(
                            to right,
                            transparent,
                            white var(--start-padding, 0px),
                            white calc(100% - var(--stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--mask-gradient)",
    maskImage: "var(--mask-gradient)",
  };
};

export const fadeRight = (value: any) => {
  return {
    "--stop-padding": value,
    "--mask-gradient": `linear-gradient(
                            to right,
                            transparent,
                            white var(--start-padding, 0px),
                            white calc(100% - var(--stop-padding, 0px)),
                            transparent
                          )`,

    "-webkit-mask-image": "var(--mask-gradient)",
    maskImage: "var(--mask-gradient)",
  };
};
