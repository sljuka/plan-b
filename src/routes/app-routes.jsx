import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WalletInfo } from "@/pages/wallet-info";
import Warning from "@/pages/warning";
import Onboarding from "@/pages/onboarding";
import Home from "@/pages/home";
import { Protected } from "@/lib/protected";
import { Public } from "@/lib/Public";
import { Invoice } from "@/components/invoice";
import Test from "@/pages/test";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/wallet"
          element={
            <Protected>
              <WalletInfo />
            </Protected>
          }
        />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/warning"
          element={
            <Protected>
              <Warning />
            </Protected>
          }
        />
        <Route
          path="/invoice"
          element={
            <Protected>
              <Invoice />
            </Protected>
          }
        />
        <Route
          path="/test"
          element={
            <Protected>
              <Test />
            </Protected>
          }
        />

        <Route
          index
          path="/"
          element={
            <Public>
              <Onboarding />
            </Public>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
