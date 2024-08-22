// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            resolve(); // Resolve with undefined to ensure the promise is always completed
        }
    });
}

module.exports = getPaymentTokenFromAPI;
