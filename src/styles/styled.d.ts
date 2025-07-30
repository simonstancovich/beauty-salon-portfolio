import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;

      white: string;
      black: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;

      blue: string;
      red: string;
      green: string;
      yellow: string;
      lipstick: string;
      roseGold: string;
      ivory: string;
      charcoal: string;
      gold: string;
      blush: string;
      taupe: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fonts: {
        logo: string; // 'Bodoni Moda', serif
        heading: string; // 'Montserrat', sans-serif
        body: string; // 'Inter', sans-serif
      };
      fontSize: {
        sm: string; // 14px
        base: string; // 16px
        lg: string; // 20px
        xl: string; // 24px
        "2xl": string; // 30px
        "3xl": string; // 36px
      };
      fontWeight: {
        normal: number;
        bold: number;
      };
    };
    transitions: {
      default: string;
      quick: string;
      defaultOpacity: string;
      defaultTransform: string;
      defaultFilter: string;
      defaultLeft: string;
      defaultWidth: string;
    };
    radius: {
      xxs: string;
      xs: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
      full: string;
    };
    border: {
      thin: string;
      thick: string;
      style: {
        solid: string;
        dashed: string;
        dotted: string;
      };
    };
    shadow: {
      xs: string;
      xl: string;
      text: string;
    };
    scale: {
      xsFull: string;
    };
    breakpoint: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    width: {
      maxWidth: string;
      headerHeight: string;
    };
  }
}
