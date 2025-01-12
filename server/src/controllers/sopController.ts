import { Request, Response } from 'express';
import { getAllSOPs, getSOPById, createSOP, deleteSOP } from '../services/sopService';

// Haal alle SOP's op
export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const sops = await getAllSOPs();
    res.json(sops);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch SOPs' });
  }
};

// Haal een specifieke SOP op
export const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const sop = await getSOPById(Number(id)); // Zorg ervoor dat ID een nummer is
    if (!sop) {
      res.status(404).json({ error: 'SOP not found' });
      return;
    }
    res.json(sop);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch SOP' });
  }
};

// Voeg een nieuwe SOP toe
export const create = async (req: Request, res: Response): Promise<void> => {
  const { titel, semester, datum } = req.body;
  try {
    const newSOP = await createSOP({ titel, semester, datum });
    res.status(201).json(newSOP);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create SOP' });
  }
};

// Verwijder een SOP
export const remove = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteSOP(Number(id)); // Zorg ervoor dat ID een nummer is
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete SOP' });
  }
};
