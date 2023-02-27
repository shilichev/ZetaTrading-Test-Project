import "./App.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./common/Layout";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2E7D32",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>1</Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
