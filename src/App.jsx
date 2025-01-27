import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/app-routes";

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
