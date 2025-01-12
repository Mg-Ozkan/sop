import mysql, { Pool } from 'mysql2/promise'; // Gebruik de promise-gebaseerde MySQL-driver
import dotenv from 'dotenv'; // Voor omgevingsvariabelen

dotenv.config(); // Laad de omgevingsvariabelen vanuit een .env-bestand

// Typedefinitie voor de configuratie van de pool
const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'isopdb',
  password: process.env.DB_PASSWORD || '',
  port: Number(process.env.DB_PORT) || 3307,
  waitForConnections: true,
  connectionLimit: 10, // Maximum aantal verbindingen
  queueLimit: 0, // Geen limiet voor wachtrij
});

export default pool; // Exporteer de pool als standaardexport
