import usePaymentHistory from "@/hooks/payment-history";
import { toSats } from "@/utils/sats";
import { shortStr } from "@/utils/shortStr";
import { Activity, ArrowDown, ArrowUp } from "lucide-react";

export const Tsxs = () => {
  const { data, isLoading } = usePaymentHistory();

  if (isLoading)
    return (
      <div className="flex items-center justify-center text-white/50">
        <Activity className="h-6 w-6 mr-2" />
        <p>Loading...</p>
      </div>
    );

  if (!data || data.length === 0)
    return (
      <div className="flex items-center justify-center text-white/50">
        <Activity className="h-6 w-6 mr-2" />
        <p>No transactions</p>
      </div>
    );

  console.log("SSS", data);

  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      {data.map((tx) => (
        <div
          className="flex flex-1 gap-4 w-full justify-between"
          key={tx.payment_hash}
        >
          <span className="flex gap-1 w-32">
            {tx.amount > 0 ? (
              <ArrowDown className="text-green-500" />
            ) : (
              <ArrowUp className="text-red-500" />
            )}
            {shortStr(tx.bolt11)}
          </span>
          <span className="flex-1">{tx.memo}</span>
          <span className="w-32 text-end">
            {toSats(Math.abs(tx.amount))} SAT
          </span>
          <span className="text-white/50 w-48">
            {new Date(tx.time).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};
