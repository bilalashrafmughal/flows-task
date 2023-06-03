import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "@app/AppRouter";
import { Provider } from "react-redux";
import store from "@app/store";

export default function App() {
  const mainTheme = createTheme({
    palette: {
      background: {
        paper: "#fff",
        default: "#f7f7f7",
      },
    },
  });
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}
