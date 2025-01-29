import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useCurrentUser from "./current-user";
import useCreateInvoice from "./create-invoice";
import { toSats } from "@/utils/sats";


const useReceiveLnurl = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const currentUser = useCurrentUser();
  const mutation = useCreateInvoice();

  return useMutation({
    mutationFn: async ({ lnurl }) => {
      const response = await axios.get(`${BASE_URL}${"/api/v1/lnurlscan/"}${lnurl}`,
        {
          headers: {
            "X-Api-Key": currentUser.adminKey,
            "Content-Type": "application/json",
          },
        });

      const amount = toSats(response.data.minWithdrawable);
      const invoice = mutation.mutate({ amount, memo: "Getting the sats!" });

      const callback_resp = await axios.get(`${response.data.callback}&pr=${invoice?.data?.payment_request}`);

      return callback_resp.status;
    },
  });
};

export default useReceiveLnurl;
