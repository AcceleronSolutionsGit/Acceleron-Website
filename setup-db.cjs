const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

async function setupDatabase() {
  try {
    console.log("Connecting to MySQL...");
    // Connect without database first to create it
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      multipleStatements: true // Allow running the entire schema at once
    });

    console.log("Reading schema.sql...");
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    
    console.log("Executing schema.sql...");
    await connection.query(schemaSql);
    
    console.log("Database and tables created successfully.");

    // Now connect to the specific database to insert admin
    await connection.changeUser({ database: 'acceleron_db' });

    console.log("Checking for existing admins...");
    const [existing] = await connection.query("SELECT * FROM admins");
    
    if (existing.length === 0) {
      console.log("Creating default admin user...");
      const id = require('crypto').randomUUID();
      const email = 'admin@acceleron.com';
      const plainPassword = 'password123';
      
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(plainPassword, salt);
      
      await connection.query(
        "INSERT INTO admins (id, email, password_hash, role) VALUES (?, ?, ?, ?)",
        [id, email, hash, 'ADMIN']
      );
      
      console.log(`\n================================`);
      console.log(`Admin user created!`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${plainPassword}`);
      console.log(`================================\n`);
    } else {
      console.log("Admin user already exists.");
    }

    await connection.end();
    console.log("Setup complete!");
    
  } catch (err) {
    console.error("Failed to setup database:", err.message);
    if (err.code === 'ECONNREFUSED') {
      console.error("\nMySQL doesn't seem to be running on localhost (port 3306) or the root user requires a password.");
    }
  }
}

setupDatabase();
