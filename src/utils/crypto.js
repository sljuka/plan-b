import SHA256 from 'crypto-js/sha256';

export const hash = (text) => {
    return SHA256(text).toString();
}