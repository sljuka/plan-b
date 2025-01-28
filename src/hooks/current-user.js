/**
 * 
 * @returns {null|{adminKey: string, invoiceKey: string, walletId: string}}
 */
const useCurrentUser = () => {
    const currentUser = localStorage.getItem('userData');

    return currentUser ? JSON.parse(currentUser) : null;
};

export default useCurrentUser;
