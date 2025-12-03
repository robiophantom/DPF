# DPF
Document Plagiarism Finder using Jaccard similarity  via murmurhash.

A JavaScript-based document plagiarism detection system that analyzes similarity between multiple documents, including **PDFs (normal + scanned), DOCX, and TXT files**. For scanned PDFs, the system uses **Tesseract OCR** to extract text before performing plagiarism analysis.

This tool is designed to help **teachers, evaluators, and content creators** quickly identify similarities across multiple documents.

---

## 🔍 Key Features

* ✅ Supports **PDF and DOCX** files
* ✅ Handles **scanned PDFs** using Tesseract OCR
* ✅ Upload up to **100 files at once**
* ✅ File size limit: **< 5 MB per file**
* ✅ Uses:

  * **MurmurHash** for efficient text hashing
  * **Shingling technique** for similarity detection
  * **Text Normalization & Lemmatization** to reduce computation and improve accuracy
* ✅ Fast and scalable plagiarism comparison

---

## 🛠️ Technologies Used

* **JavaScript (Node.js / Browser)**
* **Tesseract OCR** (for scanned PDFs)
* **MurmurHash**
* **Natural Language Processing (NLP)**
* **Text Preprocessing & Lemmatization**

---

## ⚙️ How It Works

1. User uploads multiple documents (up to 100).
2. Text is extracted:

   * Scanned PDFs → Tesseract OCR
   * Normal PDFs / DOCX / TXT → Direct extraction
3. Text preprocessing is applied:

   * Normalization
   * Tokenization
   * Lemmatization
4. Document fingerprints are generated using **MurmurHash + Shingling**
5. Similarity is calculated and displayed.

---

## 📦 Installation

```bash
git clone https://github.com/robiophantom/DPF.git
cd DPF
npm install
npm start
```

---

## 🚀 Future Enhancements

* Cloud storage support (AWS/Firebase)
* AI-based semantic similarity (BERT / SBERT)
* Report export (PDF/CSV)
* UI-based highlight of copied content
* User authentication & roles
