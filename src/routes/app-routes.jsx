import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletInfo } from "@/pages/wallet-info";
import Warning from "@/pages/warning";
import Onboarding from "@/pages/onboarding";
import Home from "@/pages/home";
import { Invoice } from "@/components/invoice";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wallet" element={<WalletInfo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route index path="/" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
