const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function createTestUsers() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'acceleron_db'
    });

    const roles = [
      { email: 'super@acceleron.com', role: 'SUPER_ADMIN' },
      { email: 'hr@acceleron.com', role: 'HR' },
      { email: 'marketing@acceleron.com', role: 'MARKETING' },
      { email: 'editor@acceleron.com', role: 'EDITOR' },
    ];

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('password123', salt);

    console.log("Creating test users...");
    
    for (const { email, role } of roles) {
      const [existing] = await connection.query("SELECT * FROM admins WHERE email = ?", [email]);
      if (existing.length === 0) {
        const id = require('crypto').randomUUID();
        await connection.query(
          "INSERT INTO admins (id, email, password_hash, role) VALUES (?, ?, ?, ?)",
          [id, email, hash, role]
        );
        console.log(`Created: ${email} (${role})`);
      } else {
        console.log(`Skipped: ${email} already exists.`);
      }
    }

    await connection.end();
    console.log("Finished creating test users.");
    
  } catch (err) {
    console.error("Failed to create test users:", err.message);
  }
}

createTestUsers();
