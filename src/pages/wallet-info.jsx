import useWalletInfo from "@/hooks/get-wallet"

export const WalletInfo = () => {
    const { data: walletInfo, loading, error } = useWalletInfo()

    console.log('AAA', walletInfo)
    if (loading) return <div>Loading</div>

    if (error) return <div>Error</div>

    return (
        <div className='pt-4 flex gap-4 flex-col'>
            {/* <span>Balance: {walletInfo.balance}</span>
            <span>Name: {walletInfo.name}</span> */}
        </div>
    )
}
