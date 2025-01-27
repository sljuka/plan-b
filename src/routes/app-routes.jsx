import Home from "@/pages/home";
import Onboarding from "@/pages/onboarding";
import { WalletInfo } from "@/pages/wallet-info";
import { Switch, Route } from "react-router-dom";

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Onboarding} />
    <Route exact path="/home" component={Home} />
    <Route path="/wallet"><WalletInfo /></Route>
  </Switch>
);

export default AppRoutes;
