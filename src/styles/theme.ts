import type { DefaultTheme } from "styled-components";
import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { typography } from "./tokens/typography";
import { transitions } from "./tokens/transitions";
import { border } from "./tokens/border";
import { radius } from "./tokens/radius";
import { shadow } from "./tokens/shadow";
import { scale } from "./tokens/scale";
import { breakpoint } from "./tokens/breakpoint";
import { width } from "./tokens/width";

export const defaultTheme: DefaultTheme = {
  colors: {
    background: colors.white,
    text: colors.black,
    primary: colors.blue,
    ...colors,
  },
  spacing,
  typography,
  transitions,
  radius,
  border,
  shadow,
  scale,
  breakpoint,
  width,
};
