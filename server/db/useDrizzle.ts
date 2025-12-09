import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import { DrizzleConfig } from "drizzle-orm";

export async function useDrizzle() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  const db = drizzle(connection, { schema, mode: "default" });
  return { db, connection };
}

export const tables = schema;
export type User = typeof schema.users.$inferSelect;
export type Contact = typeof schema.contact.$inferInsert;
export type LoginAttempts = typeof schema.loginAttempts.$inferInsert;
