import { yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  lupaBlue: '#232af0',
  lupaLBlue: '#bae4f4',
  lupaPurple: '#602464',
  lupaLPurple: '#b4bcf4',
  lupaRed: '#ef495e',
  lupaBeige: '#f6dcc1',
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};