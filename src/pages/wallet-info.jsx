import useWalletInfo from "@/hooks/get-wallet";
import { toSats } from "@/utils/sats";
import WalletCreate from "./wallet-create";

export const WalletInfo = () => {
  const { data: walletInfo, loading, error } = useWalletInfo();

  if (error) return <div>Error {error.message}</div>;

  if (loading || !walletInfo) return <div>Loading</div>;

  return (
    <>
      <div className="pt-4 flex gap-4 flex-col">
        <span>Balance: {toSats(walletInfo.balance)}</span>
        <span>Name: {walletInfo.name}</span>
      </div>
      <WalletCreate />
    </>
  );
};
