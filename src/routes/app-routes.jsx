import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletInfo } from "@/pages/wallet-info";
import { PayInvoice } from "@/pages/pay-invoice";
import Warning from "@/pages/warning";
import Onboarding from "@/pages/onboarding";
import Home from "@/pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payinvoice" component={PayInvoice} />
        <Route path="/wallet" element={<WalletInfo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/warning" element={<Warning />} />
        <Route index path="/" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
