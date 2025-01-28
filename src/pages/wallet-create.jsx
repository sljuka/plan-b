import useCreateWallet from "@/hooks/create-wallet";
import { useState } from "react";

export const WalletCreate = () => {
  const [name, setName] = useState("");
  const mutation = useCreateWallet();

  return (
    <>
      <h1>Create wallet</h1>
      {mutation.isPending ? (
        "Creating wallet..."
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? (
            <>
              <div>Wallet created: {mutation?.data.id}</div>
            </>
          ) : null}

          <button
            onClick={() => {
              mutation.mutate(name);
            }}
          >
            Create Wallet
          </button>
        </>
      )}
    </>
  );
};

export default WalletCreate;
