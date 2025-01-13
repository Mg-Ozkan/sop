import express from 'express';
import * as sopController from '../controllers/sopController';
import { getAllSOPs } from '../services/sopService';

const router = express.Router();

// Route om alle SOP's op te halen
router.get("/api/sop", sopController.getAll); // Ophalen van alle SOP's

// Route om een specifieke SOP op te halen
router.get('/:id', sopController.getById);

// Route om een nieuwe SOP toe te voegen
router.post('/', sopController.create);

// Route om een SOP te verwijderen
router.delete('/:id', sopController.remove);

export default router;
