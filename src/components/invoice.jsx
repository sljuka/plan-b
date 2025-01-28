import { Button } from "@/components/ui/button";
import useCreateInvoice from "@/hooks/create-invoice";
import { useState } from "react";
import QRCode from "./qr-code";

export const Invoice = () => {
  const [amount, setAmount] = useState(0);
  const [memo, setMemo] = useState("");
  const [expire, setExpire] = useState(3600);
  const mutation = useCreateInvoice();

  return (
    <>
      <h1>Create Invoice</h1>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Memo"
        onChange={(e) => setMemo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expire"
        onChange={(e) => setExpire(e.target.value)}
      />
      <div>
        {mutation.isPending ? (
          "Creating invoice..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? (
              <>
                <div>Invoice: {mutation.data?.payment_request}</div>
                <QRCode size="200px" string={mutation.data?.payment_request} />
              </>
            ) : null}

            <Button
              onClick={() => {
                mutation.mutate(amount, memo, expire);
              }}
            >
              Create Invoice
            </Button>
            <span></span>
          </>
        )}
      </div>
    </>
  );
};
