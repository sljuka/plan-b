import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BitcoinBalance from "@/components/bitcoin-balance";
import useWalletInfo from "@/hooks/get-wallet";
import { useNavigate } from "react-router-dom";
import useLogout from "@/hooks/logout";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { TsxSection } from "@/components/txs-section";
import { Tsxs } from "@/components/tsxs";

export default function Home() {
  const mutation = useLogout();
  const navigate = useNavigate();
  const { data: walletInfo } = useWalletInfo();
  const [view, setView] = useState("SAT");

  if (!walletInfo) {
    return <div className="min-h-screen bg-black">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {}

      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight">
            Plan <span className="text-[#F89B2A] mr-2">₿</span>Wallet
          </h1>
          <button
            onClick={() => {
              mutation.mutate();
              navigate("/");
            }}
          >
            Logout
          </button>
        </header>

        <main className="space-y-12">
          <section>
            <h2 className="flex items-center gap-4 text-xl mb-6 font-light">
              Current Balance{" "}
              <span className="flex gap-2">
                <span className="text-sm text-gray-300">SAT</span>
                <Switch
                  onCheckedChange={() =>
                    setView((v) => (v === "BTC" ? "SAT" : "BTC"))
                  }
                />
                <span className="text-sm text-gray-300">BTC</span>
              </span>
            </h2>
            <BitcoinBalance view={view} balance={walletInfo.balance} />
          </section>

          <section className="block">
            <h2 className="text-xl mb-6 font-light">Quick Actions</h2>
            <div className="flex gap-4 sm:gap-6">
              <Button
                variant="secondary"
                className="flex-1 transition-all duration-300 py-4 sm:py-6 text-lg rounded-xl shadow-lg text-[16px] sm:text-[18px] hover:bg-[#f89b2adf] text-white font-normal sm:px-20"
                onClick={() => navigate("/receive")}
              >
                <ArrowDownLeft className="mr-2 h-5 sm:h-6 w-5 sm:w-6" /> Receive
              </Button>
              <Button
                onClick={() => navigate("/send")}
                variant="secondary"
                className="flex-1 text-white hover:bg-[#F89B2A]/90 transition-all duration-300 py-4 sm:py-6 text-lg rounded-xl shadow-lg sm:px-20"
              >
                <ArrowUpRight className="mr-2 h-5 sm:h-6 w-5 sm:w-6" /> Send
              </Button>
            </div>
          </section>
          <TsxSection>
            <Tsxs />
          </TsxSection>
        </main>
      </div>
    </div>
  );
}
