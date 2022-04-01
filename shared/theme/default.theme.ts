import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    background: {
      primary: palette.light_yellow,
      secondary: palette.gray_transparent,
    },
    sideButtons: {
      primaryBg: palette.light_yellow,
      hoverBg: palette.gray_dark_transparent,
    },
    modal: {
      primary: palette.light_yellow,
      secondary: palette.gray_transparent,
    },
    text: {
      primary: palette.black,
      secondary: palette.orange,
    },
  },
  ...global,
};

export default defaultTheme;
