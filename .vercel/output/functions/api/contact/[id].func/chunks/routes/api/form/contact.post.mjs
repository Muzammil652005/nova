import { d as defineEventHandler, r as readBody, c as createError } from '../../../_/nitro.mjs';
import { z } from 'zod';
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

const contact_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone, location, message } = body;
  const contactSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    name: z.string({ message: "Name is required." }),
    phone: z.string({ message: "Phone is required." }).min(10, "Phone Number Must be 10 Digits").max(10, "Phone Number Must be 10 Digits"),
    location: z.string({ message: "Location is required." }).nonempty(),
    message: z.string({ message: "Message is required." })
  });
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      message: "Invalid Entry",
      data: result.error.flatten().fieldErrors
    });
  }
  const { db, connection } = await useDrizzle();
  async function createData() {
    await db.insert(contact).values({
      name,
      email,
      phone,
      location,
      message
    });
  }
  await createData();
  connection.end();
  return {
    status: true,
    message: "Request received! Our team will contact you soon"
  };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
