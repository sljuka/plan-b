import Home from "@/pages/home";
import Onboarding from "@/pages/onboarding";
import { WalletInfo } from "@/pages/wallet-info";
import { Invoice } from "@/components/invoice";
import { Switch, Route } from "react-router-dom";

const AppRoutes = () => (
  <Switch>
    <Route path="/wallet" component={WalletInfo} />
    <Route path="/invoice" component={Invoice} />
    <Route path="/home" component={Home} />
    <Route path="/" component={Onboarding} />
  </Switch>
);

export default AppRoutes;
