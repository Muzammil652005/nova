import { drizzle } from "drizzle-orm/singlestore";
import { users } from "../db/schema";
import useHash from "./useHash";

export default function seeder() {
  const db = drizzle(process.env.DATABASE_URL!);
  const { make } = useHash();

  db.insert(users).values({
    name: "Novadesk",
    email: "novadesk_admin@novadesk.in",
    password: make("Novadesk@2025__"),
    role: "admin",
  });
}
