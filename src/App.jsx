import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import AppRoutes from "./routes/app-routes";

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AppRoutes />
  </ThemeProvider>
);

export default App;
