import { desc, eq, sql } from "drizzle-orm";
import { contact } from "~~/server/db/schema";
import { useDrizzle } from "~~/server/db/useDrizzle";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const contactId = event.context.params?.id;
  const { user } = await requireUserSession(event);
  const { db, connection } = await useDrizzle();

  if (!user) {
    return createError({
      statusCode: 400,
      statusMessage: "Try Later",
      message: "Invalid Request",
    });
  }

  const [{ count }] = await db
    .select({ count: sql<number>`count(*)` })
    .from(contact);

  await db.delete(contact).where(eq(contact.id, contactId));

  const contactSubmit = await db
    .select()
    .from(contact)
    .limit(body.limit ?? 10)
    .offset((body.page - 1) * body.limit)
    .orderBy(desc(contact.id));

  connection.end();
  return {
    contacts: contactSubmit,
    total: count,
  };
});
