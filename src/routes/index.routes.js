import express from 'express';

// Importar todas as rotas
import authRoutes from './auth.routes.js';
import animeRoutes from './animeRoutes.js';
import personagemRoutes from './personagemRoutes.js';
import collectionRouter from './collectionRoutes.js';
import cardRouter from './cardRoutes.js';

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRoutes);

// Rotas protegidas
router.use(authMiddleware); 

router.use("/anime", animeRoutes);
router.use("/personagens", personagemRoutes);
router.use("/collections", collectionRouter);
router.use("/cards", cardRouter);

export default router;

