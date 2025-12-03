import { readFileSync } from 'fs';
import pdfParse from 'pdf-parse';
import { extractRawText } from 'mammoth';
import { recognize } from 'tesseract.js';
import { pdf2pic } from 'pdf2pic';

// Extract text from PDF
async function extractTextFromPDF(filepath, task_id) {
    const dataBuffer = readFileSync(filepath);
    const data = await pdfParse(dataBuffer);

    if(data.text.trim()) {
        return data.text;
    }

    // If no text, perform OCR on each page
    const convert = pdf2pic(filepath, {
        density: 200,
        saveFilename: 'temp',
        savePath: 'uploads/temp/' + {task_id},
        format: 'png',
        width: 1200,
        height: 16000
    })

    const numPages = data.numpages || 1;
    let ocrText = '';

    for(let i = 1; i <= numPages; i++) {
        const page = await convert(i);
        const result = await recognize(page.path, 'eng');
        ocrText += result.data.text + '\n';
    }

    return ocrText;
}

// Extract text from DOCX
async function extractTextFromDocx(filepath) {
    const buffer = readFileSync(filepath);
    const result = await extractRawText({ buffer });
    return result.value;
}

// Main extract function
async function extractText(filepath, task_id) {
    const title = filepath
    const ext = filepath.split('.').pop().toLowerCase();

    if (ext === 'pdf') {
        return {
            title,
            text: await extractTextFromPDF(filepath, task_id)
        }; 
    } else if (ext === 'docx') {
        return {
            title,
            text: await extractTextFromDocx(filepath)
        };
    } else {
        throw new Error('Unsupported file format: ' + ext );
    }
}

export { extractText };