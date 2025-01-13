import express, { Application } from 'express';
import sopRoutes from './routes/sopRoutes';

const app: Application = express();

import cors from "cors";
app.use(cors());

// Middleware voor JSON-parsing
app.use(express.json());

// Prefix voor SOP-routes
app.use('/api/sop', sopRoutes);

console.log("Starting backend...");
// Start server
const PORT = 8000; // De backend poort
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
