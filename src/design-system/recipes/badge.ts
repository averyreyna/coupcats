import { cva } from "styled-system/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
    borderRadius: "full",
    paddingInline: "2",
    paddingBlock: "0.5",
    fontSize: "xs",
    fontWeight: "medium",
  },
  variants: {
    outcome: {
      successful: {
        backgroundColor: "color-mix(in srgb, #009C76 15%, transparent)",
        color: "color-mix(in srgb, #009C76 80%, #343A40)",
      },
      failed: {
        backgroundColor: "color-mix(in srgb, #D44866 15%, transparent)",
        color: "color-mix(in srgb, #D44866 80%, #343A40)",
      },
      attempted: {
        backgroundColor: "color-mix(in srgb, #FF6A00 15%, transparent)",
        color: "color-mix(in srgb, #FF6A00 80%, #343A40)",
      },
      plot: {
        backgroundColor: "color-mix(in srgb, #6C757D 15%, transparent)",
        color: "#6C757D",
      },
      alleged: {
        backgroundColor: "color-mix(in srgb, #6C757D 15%, transparent)",
        color: "#6C757D",
      },
    },
  },
  defaultVariants: { outcome: "plot" },
});

export const dotRecipe = cva({
  base: {
    display: "inline-block",
    height: "1.5",
    width: "1.5",
    borderRadius: "full",
    flexShrink: "0",
  },
  variants: {
    outcome: {
      successful: { backgroundColor: "#009C76" },
      failed:     { backgroundColor: "#D44866" },
      attempted:  { backgroundColor: "#FF6A00" },
      plot:       { backgroundColor: "#ADB5BD" },
      alleged:    { backgroundColor: "#ADB5BD" },
    },
  },
  defaultVariants: { outcome: "plot" },
});
