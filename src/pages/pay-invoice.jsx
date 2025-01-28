import payInvoice from "@/hooks/pay-invoice";
import { useState } from "react";

export const PayInvoice = () => {
  const [invoice, setInvoice] = useState("");
  const { data: payinvoice, loading, error, mutate } = payInvoice();

  if (error) return <div>Error {error?.response?.data?.detail}</div>;

  if (loading) return <div>Loading</div>;

  return (
    <div className="pt-4 flex gap-4 flex-col">
      <h2>Invoice: </h2>
      <input
        type="text"
        placeholder="invoice"
        onChange={(e) => setInvoice(e.target.value)}
      />
      <button onClick={() => mutate(invoice)}>Pay</button>
      <span>Payment Hash: {payinvoice?.checking_id}</span>
    </div>
  );
};
