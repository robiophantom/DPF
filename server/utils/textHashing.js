import MurmurHash3 from "imurmurhash";

function getShingles(text, k = 3) {
    const words = text.split(/\s+/);
    const shingles = [];
    for (let i = 0; i <= words.length - k; i++) {
        const shingle = words.slice(i, i + k).join(' ');
        shingles.add(shingle);
    }
    return shingles;
}
function hashShingles(dataArray, k = 3) {
    const shingles = getShingles(dataArray, k);
    return shingles.map(shingle => MurmurHash3(shingle).result() >>> 0); // >>> 0 converts to unsigned 32-bit integer
}

export { hashShingles };