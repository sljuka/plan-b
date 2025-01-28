import paymentHistory from "@/hooks/payment-history"

export const GetHistory = () => {
    const { data: history, loading, error, mutate} = paymentHistory()

    if (error) return <div>Error {error?.response?.data?.detail}</div>

    if (loading) return <div>Loading</div>

    return (
        <div className='pt-4 flex gap-4 flex-col'>
            <h2>Transactions</h2>
            <button onClick={ () => { mutate() }}>SHOW TRANSACTIONS</button>
            <div>{ history }</div>
        </div>
    );
}