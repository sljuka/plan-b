import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";

const usePaymentHistory = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentUser = useCurrentUser();

  return useQuery({
    queryKey: ["History"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}${"/api/v1/payments"}`, {
        params: {
          limit: 10
        },
        headers: {
          "X-Api-Key": currentUser.adminKey,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    },
  });
};

export default usePaymentHistory;
