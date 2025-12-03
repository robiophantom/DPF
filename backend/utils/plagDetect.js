function detectPlagiarism(hashedDocuments) {
    const n = hashedDocuments.length;
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        // Build frequency map for document i
        const freqMap = {};
        hashedDocuments[i].forEach(num => {
            freqMap[num] = (freqMap[num] || 0) + 1;
        });

        for (let j = i + 1; j < n; j++) {
            let score = 0;
            const freqMap2 = { ...freqMap }; // fresh copy for each j

            for (let num of hashedDocuments[j]) {
                if (freqMap2[num] > 0) {
                    score++;
                    freqMap2[num]--;
                }
            }

            matrix[i][j] = score;
            matrix[j][i] = score; // symmetric
        }
    }
    return matrix;
}
export default detectPlagiarism;