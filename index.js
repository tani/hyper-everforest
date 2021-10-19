// Original theme: https://github.com/sainnhe/everforest by Sainnhe Park
// Copyright 2021 TANIGUCHI Masaya. All rights reserved.
// This work is licensed under the MIT License. https://git.io/mit-license
const foregroundColor = {
  dark: "#d3cacc",
  light: "#5c6a72",
};
const backgroundColor = {
  dark: {
    hard: "#2b3339",
    medium: "#2f383e",
    soft: "#323d43",
  },
  light: {
    hard: "#fff9e8",
    medium: "#fdf6e3",
    soft: "#f8f0dc",
  },
};
const selectionColor = {
  dark: {
    hard: "#503946",
    medium: "#573e4c",
    soft: "#eaedc8",
  },
  light: {
    hard: "#edf0cd",
    medium: "#eaedc8",
    soft: "#e6e9c4",
  },
};
const palette = {
  dark: {
    black: "#4b565c",
    red: "#e67e80",
    green: "#a7c080",
    yellow: "#dbbc7f",
    blue: "#7fbbb3",
    magenta: "#d699b6",
    cyan: "#83c092",
    white: "#d3c6aa",
  },
  light: {
    black: "#5c6a72",
    red: "#f85552",
    green: "#8da101",
    yellow: "#dfa000",
    blue: "#3a94c5",
    magenta: "#df69ba",
    cyan: "#35a77c",
    white: "#dfddc8",
  },
};
exports.decorateConfig = (config) => {
  const brightness = config.brightness || "dark";
  const mood = config.mood || "medium";
  const lightPalette = Object.fromEntries(
    Object.entries(palette[brightness]).map(([key, value]) => [
      "light" + key.charAt(0).toUpperCase() + key.slice(1),
      value,
    ]),
  );
  return Object.assign({}, config, {
    backgroundColor: backgroundColor[brightness][mood],
    foregroundColor: foregroundColor[brightness],
    borderColor: backgroundColor[brightness][mood],
    cursorColor: foregroundColor[brightness],
    cursorAccentColor: backgroundColor[brightness][mood],
    selectionColor: selectionColor[brightness][mood],
    colors: {
      ...palette[brightness],
      ...lightPalette,
    },
  });
};
