import { toSats } from "@/utils/sats";
import useDecodeInvoice from "@/hooks/decode-invoice";

export default function Test() {
  const invoiceStr =
    "lnbc10n1pnej8x8pp5jcsn2g27ap57sxfhgk9dual6xquqjm3q78u5zp8knfgthz4nd0esdp82pshjgr5dusyymrfde4jq4mpd3kx2apq24ek2uscqzpuxqr8pqsp5yl9n7wawv5hg6wz22g6ecu2k5skwf5r4zugz42zt54xn075kvj5q9qxpqysgq9rqczfy6m3ntndv9ulswfmf0xh4jkwgd9hx3d2s783ys2d6ly7fj5006jqgnqk4qpvx05ga5r2s2y5f22g64k95s40ly58elr9hw64sql8s8pd";
  const { data: invoice, loading, error } = useDecodeInvoice(invoiceStr);
  if (error) return <div>Error {error.message}</div>;

  if (loading || !invoice) return <div>Loading</div>;

  return (
    <div>
      <div>Amount: {toSats(invoice.num_satoshis)}</div>
      <div>Description: {invoice.description}</div>
      <div>Expires: {invoice.expiry}</div>
    </div>
  );
}
