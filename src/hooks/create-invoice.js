import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useCreateInvoice = () => {
  const API_KEY = import.meta.env.VITE_INVOICE_READ_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useMutation({
    mutationFn: async (amount, description = "", expiry = 3600) => {
      const payload = {
        "out": false,
        "amount": amount,
        "unit": "sat",
        "memo": description,
        "expiry": expiry,
      };

      const response = await axios.post(`${BASE_URL}${"/api/v1/payments"}`,
        payload,
        {
          headers: {
            "X-Api-Key": API_KEY,
            "Content-Type": "application/json",
          },
        });

      return response.data;
    },
  });
};

export default useCreateInvoice;