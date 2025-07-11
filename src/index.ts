import plugin from "tailwindcss/plugin";
import {
  fadeBottom,
  fadeLeft,
  fadeRight,
  fadeTop,
  fadeX,
  fadeY,
} from "./config.utils";

export default plugin.withOptions(
  function (options: { prefix?: string } = {}) {
    const prefix = options.prefix || "";

    return function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          [`${prefix}fade-x`]: fadeX,
          [`${prefix}fade-y`]: fadeY,
          [`${prefix}fade-t`]: fadeTop,
          [`${prefix}fade-b`]: fadeBottom,
          [`${prefix}fade-l`]: fadeLeft,
          [`${prefix}fade-r`]: fadeRight,
        },
        {
          values: theme("spacing"),
        }
      );
    };
  },
  () => ({ name: "eio-tailwind-fade" })
);
