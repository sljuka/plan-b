import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const useWalletInfo = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { invoiceKey } = useCurrentUser();

  return useQuery({
    queryKey: ["walletInfo"],
    queryFn: async () => {
      const response = await axios(`${BASE_URL}${"/api/v1/wallet"}`, {
        headers: {
          "X-Api-Key": invoiceKey,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default useWalletInfo;
