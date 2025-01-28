import { useState, useEffect } from 'react';
import axios from 'axios';

const useWalletInfo = () => {
    const API_KEY = import.meta.env.VITE_WALLET_ID;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [walletInfo, setWalletInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWalletInfo = async () => {
            try {
                const response = await axios({
                    url: `${BASE_URL}${"/api/v1/balance"}`,
                    method: "GET",
                    headers: {
                        'X-Api-Key': API_KEY,
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
    }, []);

    return { walletInfo, loading, error };
};

export default useWalletInfo;