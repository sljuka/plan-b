import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./routes/app-routes";

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AppRoutes />
    <Toaster />
  </ThemeProvider>
);

export default App;
