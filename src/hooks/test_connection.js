import axios from 'axios';

/**
 * Function to interact with LNBits API
 * @param {string} endpoint - The LNBits API endpoint (e.g., '/api/v1/wallet')
 * @param {string} method - HTTP method (GET, POST, etc.)
 * @param {Object} data - Request payload (if needed)
 * @param {string} apiKey - Your LNBits wallet API key
 * @returns {Promise<Object>} - Response data from LNBits
 */
async function callLNBits(endpoint, method = 'GET', data = {}, apiKey) {
  const baseUrl = 'https://thriftytoucan6.lnbits.com';  // Replace with your LNBits instance URL

  try {
    const response = await axios({
      url: `${baseUrl}${endpoint}`,
      method: method,
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
      data: method === 'POST' ? data : undefined,
    });

    return response.data;
  } catch (error) {
    console.error('Error calling LNBits API:', error.response?.data || error.message);
    throw error;
  }
}

// Example usage:
(async () => {
  const apiKey = '5942edd82aba459daf41f1636825b005';  // Replace with your LNBits API key

  // Get wallet balance
  try {
    const walletInfo = await callLNBits('/api/v1/wallet', 'GET', {}, apiKey);
    console.log(walletInfo);
  } catch (err) {
    console.error('Failed to fetch wallet info:', err);
  }

  // Create an invoice
  // try {
  //   const invoiceData = {
  //     amount: 1000,  // Amount in sats
  //     memo: 'Test Invoice',
  //   };
  //   const invoice = await callLNBits('/api/v1/payments', 'POST', invoiceData, apiKey);
  //   console.log('Invoice:', invoice);
  // } catch (err) {
  //   console.error('Failed to create invoice:', err);
  // }
})();
