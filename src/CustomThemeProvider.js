import { createTheme, ThemeProvider } from '@mui/material/styles';

const DARK_SLATE_GREY = '#2f4f4f';

const theme = createTheme({
  palette: {
    primary: {
      main: DARK_SLATE_GREY,
    },
  },
});

function CustomThemeProvider(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
