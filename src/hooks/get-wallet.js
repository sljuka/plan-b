import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWalletInfo = () => {
  const API_KEY = import.meta.env.VITE_INVOICE_READ_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useQuery({
    queryKey: ["walletInfo"],
    queryFn: async () => {
      const response = await axios(`${BASE_URL}${"/api/v1/wallet"}`, {
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default useWalletInfo;
