import mysql from 'mysql2/promise';
import { drizzle as drizzle$1 } from 'drizzle-orm/mysql2';
import { createHash } from 'crypto';
import { mysqlTable, varchar, serial, mysqlEnum, timestamp } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/singlestore';

const users = mysqlTable("users", {
  id: serial().notNull(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  role: mysqlEnum(["user", "admin"]).default("user")
});
const contact = mysqlTable("contacts", {
  id: serial().notNull(),
  name: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 155 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  message: varchar({ length: 255 }).default("Null")
});
const loginAttempts = mysqlTable("login_attempts", {
  id: serial().notNull(),
  sessionId: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  attemptedAt: timestamp().notNull()
});
async function main() {
  const db = drizzle(process.env.DATABASE_URL);
  const appKey = process.env.APP_KEY;
  const password = appKey + "novadesk@2025__";
  db.insert(users).values({
    name: "Novadesk",
    email: "novadesk_admin@novadesk.in",
    password: createHash("sha256").update(password).digest("hex"),
    role: "admin"
  });
}
main();

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  contact: contact,
  loginAttempts: loginAttempts,
  users: users
}, Symbol.toStringTag, { value: 'Module' }));

async function useDrizzle() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  });
  const db = drizzle$1(connection, { schema, mode: "default" });
  return { db, connection };
}

export { users as a, contact as c, loginAttempts as l, useDrizzle as u };
//# sourceMappingURL=useDrizzle.mjs.map
