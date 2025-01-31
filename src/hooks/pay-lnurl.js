import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";
import { toMsats } from "@/utils/sats";
import usePayInvoice from "./pay-invoice";

const usePayLnurl = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentUser = useCurrentUser();
  const mutation = usePayInvoice();

  return useMutation({
    mutationFn: async ({ lnurl, amount }) => {
      const response = await axios.get(`${BASE_URL}${"/api/v1/lnurlscan/"}${lnurl}`,
        {
          headers: {
            "X-Api-Key": currentUser.adminKey,
            "Content-Type": "application/json",
          },
        });

      const callback_resp = await axios.get(`${response.data.callback}?amount=${toMsats(amount)}`);
      const payment = mutation.mutate(callback_resp.data.pr);

      return payment;
    },
  });
};

export default usePayLnurl;
