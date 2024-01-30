// planetRoutes.ts
import express, { Request, Response } from 'express';
import passport from 'passport';
import * as planetController from './controllers/planetController';
import { authorize } from './authMiddleware';
import multer from 'multer';

const router = express.Router();

// Configura multer per il caricamento delle immagini
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Aggiungi l'autorizzazione alla route protetta
router.post('/api/planets/:id/image', authorize, upload.single('image'), async (req: Request, res: Response) => {
  try {
    const planetId = req.params.id;
    const imagePath = req.file.path;

    // Implementa la logica per salvare il percorso dell'immagine nel database per il pianeta con planetId
    await planetController.updateImage(planetId, imagePath);

    res.json({ msg: 'Image uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
