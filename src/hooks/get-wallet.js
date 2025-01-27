import { useState, useEffect } from 'react';
import axios from 'axios';

const useWalletInfo = (walletId) => {
    //todo read the api key and url from .env
    const apiKey = "5942edd82aba459daf41f1636825b005";
    const baseUrl = "https://thriftytoucan6.lnbits.com";
    const [walletInfo, setWalletInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWalletInfo = async () => {
            try {
                const response = await axios({
                    url: `${baseUrl}${"/api/v1/wallet"}`,
                    method: "GET",
                    headers: {
                        'X-Api-Key': apiKey,
                        'Content-Type': 'application/json',
                    },
                    data: undefined,
                });
                setWalletInfo(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWalletInfo();
    }, [walletId]);

    return { walletInfo, loading, error };
};

export default useWalletInfo;