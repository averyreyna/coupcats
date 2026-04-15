import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  include: ["./src/**/*.{ts,tsx}", "./index.html"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: undefined,
  jsxStyleProps: "none",
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],

  theme: {
    tokens: {
      colors: {
        // Brand — caracal palette
        caracal: {
          orange: { value: "#FF6A00" },
          forest: { value: "#00651D" },
          sky:    { value: "#007FBF" },
          rose:   { value: "#D44866" },
          teal:   { value: "#009C76" },
          navy:   { value: "#004B81" },
        },
        // Neutral scale (light mode)
        neutral: {
          0:   { value: "#FFFFFF" },
          50:  { value: "#F8F9FA" },
          100: { value: "#F1F3F5" },
          200: { value: "#E9ECEF" },
          300: { value: "#DEE2E6" },
          400: { value: "#CED4DA" },
          500: { value: "#ADB5BD" },
          600: { value: "#6C757D" },
          700: { value: "#495057" },
          800: { value: "#343A40" },
          900: { value: "#212529" },
        },
      },
      fonts: {
        sans: { value: "'DM Sans', system-ui, sans-serif" },
        mono: { value: "'JetBrains Mono', 'Fira Code', monospace" },
      },
      fontSizes: {
        "2xs": { value: "0.625rem" },
        xs:    { value: "0.75rem" },
        sm:    { value: "0.875rem" },
        md:    { value: "1rem" },
        lg:    { value: "1.125rem" },
        xl:    { value: "1.25rem" },
      },
      spacing: {
        0:    { value: "0" },
        0.5:  { value: "0.125rem" },
        1:    { value: "0.25rem" },
        1.5:  { value: "0.375rem" },
        2:    { value: "0.5rem" },
        2.5:  { value: "0.625rem" },
        3:    { value: "0.75rem" },
        3.5:  { value: "0.875rem" },
        4:    { value: "1rem" },
        5:    { value: "1.25rem" },
        6:    { value: "1.5rem" },
        7:    { value: "1.75rem" },
        8:    { value: "2rem" },
        9:    { value: "2.25rem" },
        10:   { value: "2.5rem" },
        12:   { value: "3rem" },
        14:   { value: "3.5rem" },
      },
      sizes: {
        full:      { value: "100%" },
        min:       { value: "min-content" },
        max:       { value: "max-content" },
        fit:       { value: "fit-content" },
        prose:     { value: "65ch" },
        "100vw":   { value: "100vw" },
        "100vh":   { value: "100vh" },
        auto:      { value: "auto" },
        0:         { value: "{spacing.0}" },
        0.5:       { value: "{spacing.0.5}" },
        1:         { value: "{spacing.1}" },
        1.5:       { value: "{spacing.1.5}" },
        2:         { value: "{spacing.2}" },
        2.5:       { value: "{spacing.2.5}" },
        3:         { value: "{spacing.3}" },
        3.5:       { value: "{spacing.3.5}" },
        4:         { value: "{spacing.4}" },
        5:         { value: "{spacing.5}" },
        6:         { value: "{spacing.6}" },
        7:         { value: "{spacing.7}" },
        8:         { value: "{spacing.8}" },
        9:         { value: "{spacing.9}" },
        10:        { value: "{spacing.10}" },
        12:        { value: "{spacing.12}" },
        14:        { value: "{spacing.14}" },
      },
      fontWeights: {
        normal:   { value: "400" },
        medium:   { value: "500" },
        semibold: { value: "600" },
        bold:     { value: "700" },
      },
      lineHeights: {
        none:    { value: "1" },
        normal:  { value: "1.5" },
        relaxed: { value: "1.625" },
      },
      letterSpacings: {
        normal: { value: "0em" },
        wide:   { value: "0.025em" },
        widest: { value: "0.1em" },
      },
      radii: {
        sm:   { value: "0.25rem" },
        md:   { value: "0.5rem" },
        lg:   { value: "0.75rem" },
        xl:   { value: "1rem" },
        full: { value: "9999px" },
      },
      shadows: {
        sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
        md: { value: "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)" },
        lg: { value: "0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.05)" },
        xl: { value: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)" },
      },
    },

    semanticTokens: {
      colors: {
        // App surfaces
        bg: {
          app:    { value: "{colors.neutral.50}" },
          panel:  { value: "{colors.neutral.0}" },
          subtle: { value: "{colors.neutral.100}" },
          muted:  { value: "{colors.neutral.200}" },
          hover:  { value: "{colors.neutral.200}" },
          active: { value: "{colors.neutral.300}" },
        },
        // Text
        text: {
          primary:   { value: "{colors.neutral.900}" },
          secondary: { value: "{colors.neutral.700}" },
          muted:     { value: "{colors.neutral.600}" },
          subtle:    { value: "{colors.neutral.500}" },
        },
        // Borders
        border: {
          default: { value: "{colors.neutral.200}" },
          strong:  { value: "{colors.neutral.300}" },
        },
        // Accent (primary brand — orange)
        accent: {
          default: { value: "{colors.caracal.orange}" },
          muted:   { value: "color-mix(in srgb, #FF6A00 15%, transparent)" },
          text:    { value: "color-mix(in srgb, #FF6A00 80%, #343A40)" },
        },
        // Inputs
        input: {
          bg:     { value: "{colors.neutral.0}" },
          border: { value: "{colors.neutral.300}" },
        },
      },
    },

    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },

  globalCss: {
    body: {
      margin: "0",
      minHeight: "100vh",
      fontFamily: "var(--fonts-sans)",
      backgroundColor: "var(--colors-bg-app)",
      color: "var(--colors-text-primary)",
    },
    "#root": { minHeight: "100vh" },
    // Timeline slider — orange thumb
    ".timeline-slider": {
      WebkitAppearance: "none",
      appearance: "none",
      background: "transparent",
      pointerEvents: "none",
    },
    ".timeline-slider::-webkit-slider-thumb": {
      WebkitAppearance: "none",
      appearance: "none",
      pointerEvents: "auto",
      height: "18px",
      width: "18px",
      borderRadius: "9999px",
      background: "#FF6A00",
      border: "2px solid #DEE2E6",
      boxShadow: "0 0 0 4px color-mix(in srgb, #FF6A00 15%, transparent)",
      cursor: "pointer",
    },
    ".timeline-slider::-moz-range-thumb": {
      pointerEvents: "auto",
      height: "18px",
      width: "18px",
      borderRadius: "9999px",
      background: "#FF6A00",
      border: "2px solid #DEE2E6",
      boxShadow: "0 0 0 4px color-mix(in srgb, #FF6A00 15%, transparent)",
      cursor: "pointer",
    },
    ".timeline-slider::-webkit-slider-runnable-track": { background: "transparent" },
    ".timeline-slider::-moz-range-track": { background: "transparent" },
    // MapLibre popup — light mode
    ".maplibregl-popup-content": {
      padding: "0 !important",
      background: "transparent !important",
      boxShadow: "none !important",
      border: "none !important",
    },
    ".maplibregl-popup-close-button": {
      right: "0",
      top: "0",
      width: "44px",
      height: "44px",
      fontSize: "18px",
      lineHeight: "1",
      color: "#ADB5BD",
      padding: "0",
      margin: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
    },
    ".maplibregl-popup-close-button:hover": {
      color: "#343A40",
      backgroundColor: "color-mix(in srgb, #212529 8%, transparent)",
    },
    // Popup tips — match white panel bg
    ".maplibregl-popup-anchor-bottom .maplibregl-popup-tip, .maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip, .maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip": {
      borderTopColor: "#FFFFFF",
    },
    ".maplibregl-popup-anchor-top .maplibregl-popup-tip, .maplibregl-popup-anchor-top-left .maplibregl-popup-tip, .maplibregl-popup-anchor-top-right .maplibregl-popup-tip": {
      borderBottomColor: "#FFFFFF",
    },
    ".maplibregl-popup-anchor-left .maplibregl-popup-tip": { borderRightColor: "#FFFFFF" },
    ".maplibregl-popup-anchor-right .maplibregl-popup-tip": { borderLeftColor: "#FFFFFF" },
  },
});
