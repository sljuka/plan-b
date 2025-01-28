import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRestoreWallet = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useMutation({
    mutationFn: async (walletId) => {
      const response = await axios.get(
        `${BASE_URL}/users/api/v1/user/${walletId}/wallet`,
        {
          headers: {
            "X-Api-Key": walletId,
            "Content-Type": "application/json",
          },
        }
      );

      const userData = {
        walletId: response.data.id,
        adminKey: response.data.adminkey,
        invoiceKey: response.data.inkey,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      return response.data;
    },
  });
};
