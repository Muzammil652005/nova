import { d as defineEventHandler, r as readBody, b as requireUserSession, c as createError } from '../../../_/nitro.mjs';
import { sql, eq, desc } from 'drizzle-orm';
import { u as useDrizzle, c as contact } from '../../../_/useDrizzle.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'crypto';
import 'drizzle-orm/mysql-core';
import 'drizzle-orm/singlestore';

const _id__delete = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  const contactId = (_a = event.context.params) == null ? void 0 : _a.id;
  const { user } = await requireUserSession(event);
  const { db, connection } = await useDrizzle();
  if (!user) {
    return createError({
      statusCode: 400,
      statusMessage: "Try Later",
      message: "Invalid Request"
    });
  }
  const [{ count }] = await db.select({ count: sql`count(*)` }).from(contact);
  await db.delete(contact).where(eq(contact.id, contactId));
  const contactSubmit = await db.select().from(contact).limit((_b = body.limit) != null ? _b : 10).offset((body.page - 1) * body.limit).orderBy(desc(contact.id));
  connection.end();
  return {
    contacts: contactSubmit,
    total: count
  };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
