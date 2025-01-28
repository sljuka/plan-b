import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePaymentHistory = () => {
  const API_KEY = import.meta.env.VITE_ADMIN_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useQuery({
    queryKey: ["History"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}${"/api/v1/payments"}`, {
        params: {
          limit: 10
        },
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
