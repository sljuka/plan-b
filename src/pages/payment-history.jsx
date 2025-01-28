import paymentHistory from "@/hooks/payment-history";

export const GetHistory = () => {
  const { data: history, loading, error } = paymentHistory();

  if (error) return <div>Error {error?.response?.data?.detail}</div>;

  if (loading) return <div>Loading</div>;

  console.log(history);
  return (
    <div className="pt-4 flex gap-4 flex-col">
      <h2>Transactions</h2>
      <ul>
        {history?.map((value) => (
          <li key={value.payment_hash}>
            <span>{value.bolt11}</span>
            <span>{value.memo}</span>
            <span>{value.time}</span>
            <span>{value.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
