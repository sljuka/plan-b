import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWalletInfo = () => {
  const API_KEY = import.meta.env.VITE_WALLET_ID;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  console.log('AAAA', API_KEY, typeof API_KEY)

  return useQuery({
    queryKey: ["walletInfo"],
    queryFn: () =>
      axios({
        url: `${BASE_URL}${"/api/v1/wallet"}`,
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      }),
  });
};

export default useWalletInfo;
