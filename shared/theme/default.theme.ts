import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    background: {
      primary: palette.light_yellow,
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
