import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePaymentHistory = () => {
  const API_KEY = import.meta.env.VITE_ADMIN_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useMutation({

    mutationFn: async (walletId) => {
      const payload = {
        out: true,
        bolt11: walletId,
      }

      console.log(payload)

      const response = await axios.post(`${BASE_URL}${"/api/v1/payments/history"}`, payload, {
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default usePaymentHistory;
