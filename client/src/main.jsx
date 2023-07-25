import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </ThemeProvider>
);
