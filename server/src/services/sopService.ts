import pool from '../config/db'; // Zorg dat dit verwijst naar je databaseconfiguratie
//console.log('Pool instance:', pool); // Dit zou de Pool-informatie moeten loggen

// Type voor een SOP-record
export interface SOP {
  id: number;
  titel: string;
  semester: string;
  datum: Date;
}

/**
 * Haalt alle SOP's op uit de database.
 * @returns {Promise<SOP[]>} Een array met alle SOP-records.
 */

/*export async function getData(): Promise<SOP[]> {
  try {
    const response = await fetch("http://localhost:6000/api/sop"); // Backend API-aanroep
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data = await response.json();
    return data as SOP[];
  } catch (error) {
    console.error("Error fetching data from backend API:", error);
    throw error;
  }
} */
export const getAllSOPs = async (): Promise<SOP[]> => {
  try {
    const [rows] = await pool.query('SELECT * FROM SOP');
    return rows as SOP[]; // Cast het resultaat naar een array van SOP-objecten
  } catch (error) {
    console.error('Error fetching SOPs:', error);
    throw error;
  }
};

/**
 * Haalt een specifieke SOP op op basis van ID.
 * @param {number} id - Het ID van de SOP.
 * @returns {Promise<SOP | null>} Het SOP-record, of null als het niet bestaat.
 */
export const getSOPById = async (id: number): Promise<SOP | null> => {
  try {
    const [rows] = await pool.query('SELECT * FROM SOP WHERE id = ?', [id]);
    return (rows as SOP[])[0] || null; // Geeft het eerste resultaat terug, of null
  } catch (error) {
    console.error(`Error fetching SOP with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Voegt een nieuwe SOP toe aan de database.
 * @param {SOP} sop - Het SOP-object met titel, semester en datum.
 * @returns {Promise<SOP>} Het toegevoegde SOP-record.
 */
export const createSOP = async (sop: SOP): Promise<SOP> => {
  const { titel, semester, datum } = sop;
  try {
    const [result] = await pool.query(
      'INSERT INTO SOP (titel, semester, datum) VALUES (?, ?, ?)',
      [titel, semester, datum]
    );
    const sopId = (result as { insertId: number }).insertId; // Haal de ID van het nieuwe record op
    const [rows] = await pool.query('SELECT * FROM SOP WHERE id = ?', [sopId]);
    return (rows as SOP[])[0]; // Geeft het toegevoegde record terug
  } catch (error) {
    console.error('Error creating SOP:', error);
    throw error;
  }
};

/**
 * Verwijdert een SOP uit de database op basis van ID.
 * @param {number} id - Het ID van de SOP die moet worden verwijderd.
 * @returns {Promise<void>}
 */
export const deleteSOP = async (id: number): Promise<void> => {
  try {
    await pool.query('DELETE FROM SOP WHERE id = ?', [id]);
  } catch (error) {
    console.error(`Error deleting SOP with ID ${id}:`, error);
    throw error;
  }
};

export default { getAllSOPs, createSOP };