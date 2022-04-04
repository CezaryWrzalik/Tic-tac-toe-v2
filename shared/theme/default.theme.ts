import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    background: {
      primary: palette.light_yellow,
      secondary: palette.gray_transparent,
      hoverBg: palette.gray_dark_transparent,
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
    scroll: {
      primary: palette.gray_transparent,
    }
  },
  ...global,
};

export default defaultTheme;
