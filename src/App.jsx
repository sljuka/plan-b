import { Button } from "@/components/ui/button"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import { WalletInfo } from "./pages/wallet-info";
import Onboarding from "./pages/onboarding";

function App() {
  return (
    <Router>
      <form>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/onboard">Onboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Button>Click me</Button>
      </form>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/onboard">
          <Onboarding />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/wallet">
          <WalletInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
