import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGenerateQr = (string) => {
  const API_KEY = import.meta.env.VITE_INVOICE_READ_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return useQuery({
    queryKey: ["generateQr", string],
    queryFn: async () => {
      const response = await axios(`${BASE_URL}${"/api/v1/qrcode/"}${string}`, {
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default useGenerateQr;
