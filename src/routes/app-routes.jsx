import Home from "@/pages/home";
import Onboarding from "@/pages/onboarding";
import { WalletInfo } from "@/pages/wallet-info";
import { PayInvoice } from "@/pages/pay-invoice";
import { Switch, Route } from "react-router-dom";

const AppRoutes = () => (
  <Switch>
    <Route path="/payinvoice" component={PayInvoice} />
    <Route path="/wallet" component={WalletInfo} />
    <Route path="/home" component={Home} />
    <Route path="/" component={Onboarding} />
  </Switch>
);

export default AppRoutes;
