import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const useCreateWallet = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { adminKey } = useCurrentUser();

  return useMutation({
    mutationFn: async (name = "Plan B hackathon") => {
      const payload = {
        "name": name
      }

      const response = await axios.post(`${BASE_URL}${"/api/v1/wallet"}`,
        payload,
        {
          headers: {
            "X-Api-Key": adminKey,
            "Content-Type": "application/json",
          },
        });

      const userData = {
        walletId: response.data.id,
        adminKey: response.data.adminkey,
        invoiceKey: response.data.inkey,
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      return response.data;
    },
  });
};

export default useCreateWallet;