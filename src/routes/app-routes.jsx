import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletInfo } from "@/pages/wallet-info";
import Warning from "@/pages/warning";
import Onboarding from "@/pages/onboarding";
import Home from "@/pages/home";
import { Protected } from "@/utils/protected2";
import { Invoice } from "@/components/invoice";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wallet" element={<Protected><WalletInfo /></Protected>} />
        <Route path="/home" element={<Protected><Home /></Protected>} />
        <Route path="/warning" element={<Protected><Warning /></Protected>} />
        <Route path="/invoice" element={<Protected><Invoice /></Protected>} />
        <Route index path="/" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
