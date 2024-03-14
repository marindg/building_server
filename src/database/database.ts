import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT!),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function checkDatabaseConnection() {
  try {
    await pool.connect();
    console.log(
      `🚀[DB]: DB is running at ${
        process.env.DB_HOST
      }:${parseInt(process.env.DB_PORT!)}`
    );
  } catch (error) {
    console.error(
      `[DB]: DB is not connected at ${
        process.env.DB_HOST
      }:${parseInt(process.env.DB_PORT!)}`,
      error
    );
  }
}

export default pool;
