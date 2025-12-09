import { d as defineEventHandler, r as readBody, b as requireUserSession, c as createError } from '../../_/nitro.mjs';
import { sql, desc } from 'drizzle-orm';
import { u as useDrizzle, c as contact } from '../../_/useDrizzle.mjs';
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

const index_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const { user } = await requireUserSession(event);
  const { db, connection } = await useDrizzle();
  if (user) {
    const [{ count }] = await db.select({ count: sql`count(*)` }).from(contact);
    const contactSubmit = await db.select().from(contact).limit((_a = body.limit) != null ? _a : 10).offset((body.page - 1) * body.limit).orderBy(desc(contact.id));
    connection.end();
    return {
      contacts: contactSubmit,
      total: count
    };
  } else {
    return createError({
      statusCode: 400,
      statusMessage: "Try Later",
      message: "Invalid Request"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
