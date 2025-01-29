import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toSats } from "@/utils/sats";

export const useRestoreWallet = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const ADMIN_USR = import.meta.env.VITE_USER_ID;

  return useMutation({
    mutationFn: async (walletId) => {
      const response = await axios.get(
        `${BASE_URL}/api/v1/wallets?usr=${ADMIN_USR}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //bug if the wallet exixsts, all wallets are visible to all users
      const wallet = response.data.find((w) => w.id === walletId);

      if (!wallet) {
        throw new Error("Wallet not found");
      }

      const userData = {
        walletId: wallet.id,
        adminKey: wallet.adminkey,
        invoiceKey: wallet.inkey,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      userData["balance"] = toSats(wallet.balance_msat);
      userData["name"] = wallet.name;

      return response.data;
    },
  });
};
