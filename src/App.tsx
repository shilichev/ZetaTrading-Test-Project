import "./App.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Demo } from "./routes/demo/Demo";
import { RoutesEnum } from "./common/types/routes";
import { Description } from "./routes/description/Description";
import { API } from "./routes/api/Api";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: RoutesEnum.DEMO,
    element: <Demo />,
  },
  {
    path: RoutesEnum.DESCRIPTION,
    element: <Description />,
  },
  {
    path: RoutesEnum.API,
    element: <API />,
  },
]);

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2E7D32",
      },
      action: {
        active: "#6DA46F",
      },
      info: {
        main: "#1976D2",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
