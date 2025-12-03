// Get files from server
export const handleUpload = async (req, res) => {
    // check if files are present in request
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
    }

    const fileNames = req.files.map(f => f.filename);
    res.json({ message: 'Files uploaded successfully', files: fileNames });
}

export const getFiles = async (req, res) => {
    const fs = require('fs');
    const files = fs.readdirSync('uploads/temp');
    res.json({ files });
}


