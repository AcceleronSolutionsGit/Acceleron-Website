import mysql from 'mysql2/promise';

// Create a connection pool using environment variables or fallback values
export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'acceleron_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Execute a query with parameters.
 * @param sql The SQL query to execute.
 * @param params The parameters to inject into the query.
 * @returns The query results.
 */
export async function query<T>(sql: string, params?: any[]): Promise<T> {
  const [results] = await pool.execute(sql, params);
  return results as T;
}
