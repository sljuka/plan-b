const Onboarding = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center flex-col items-center text-white">
      <img className="w-auto" src="/planb-logo.png" alt="Workflow logo" />
      <p className="text-[#CCCCCC] text-[20px] py-6">Send & Receive Bitcoin</p>
      <p className="pb-14">A simple Bitcoin Wallet for your enjoyment</p>

      <button className="bg-[#F89B2A] text-[18px] hover:bg-[#f89b2adf] text-white font-normal py-2 px-20 rounded">
        Create a new wallet
      </button>
      <small className="text-[#F89B2A] text-[20px] pt-5">
        Restore an existing wallet
      </small>
      <p className="pt-10 text-[20px]">Your wallet, Your coins</p>
    </div>
  );
};

export default Onboarding;
