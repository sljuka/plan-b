import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 sm:px-6">
      <img
        className="w-32 sm:w-40 md:w-auto"
        src="/planb-logo.png"
        alt="Workflow logo"
      />
      <p className="text-[#CCCCCC] text-[16px] sm:text-[18px] md:text-[20px] py-4 md:py-6">
        Send & Receive Bitcoin
      </p>
      <p className="pb-8 sm:pb-10 md:pb-14 text-center md:text-left">
        A simple Bitcoin Wallet for your enjoyment
      </p>

      <Button className="bg-[#F89B2A] transition-all duration-300 py-4 sm:py-5 md:py-6 text-sm sm:text-lg md:text-[18px] rounded-xl shadow-lg hover:bg-[#f89b2adf] text-white font-normal px-12 sm:px-16 md:px-20">
        <Link to={"/warning"}>Create a new wallet</Link>
      </Button>

      <small className="text-[#F89B2A] text-[16px] sm:text-[18px] pt-4 sm:pt-5">
        Restore an existing wallet
      </small>

      <p className="pt-8 sm:pt-10 md:pt-12 text-[18px] sm:text-[20px] text-center md:text-left">
        Your wallet, Your coins
      </p>
    </div>
  );
};

export default Onboarding;
