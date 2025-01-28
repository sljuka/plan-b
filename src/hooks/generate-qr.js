import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const useGenerateQr = (string) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentUser = useCurrentUser();

  return useQuery({
    enabled: Boolean(currentUser),
    queryKey: ["generateQr", string],
    queryFn: async () => {
      const response = await axios(`${BASE_URL}${"/api/v1/qrcode/"}${string}`, {
        headers: {
          "X-Api-Key": currentUser.invoiceKey,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default useGenerateQr;
