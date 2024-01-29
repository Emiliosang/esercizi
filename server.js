import express from 'express';
import multer from 'multer';
import path from 'path';
import pgPromise from 'pg-promise';

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const pgp = pgPromise();
const db = pgp('postgres://postgres:postgres@localhost:5432/NODE13');

app.use(express.json());

app.post('/planets/:id/image', upload.single('planetImage'), async (req, res) => {
  const { id } = req.params;
  const imagePath = req.file.path;

  try {
    await db.none('UPDATE planets SET image=$1 WHERE id=$2', [imagePath, id]);
    res.status(200).json({ msg: 'Image uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
