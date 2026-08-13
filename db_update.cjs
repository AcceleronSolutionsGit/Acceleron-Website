const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'acceleron',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  try {
    console.log("Adding service_id...");
    try {
      await pool.query('ALTER TABLE brochures ADD COLUMN service_id VARCHAR(255) DEFAULT NULL');
      await pool.query('ALTER TABLE brochures ADD CONSTRAINT fk_brochure_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL');
    } catch(e) { console.log("Might already exist:", e.message); }

    console.log("Adding product_id...");
    try {
      await pool.query('ALTER TABLE brochures ADD COLUMN product_id VARCHAR(255) DEFAULT NULL');
      await pool.query('ALTER TABLE brochures ADD CONSTRAINT fk_brochure_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL');
    } catch(e) { console.log("Might already exist:", e.message); }

    console.log("DB update complete");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}
run();
