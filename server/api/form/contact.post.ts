import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { contact } from "~~/server/db/schema";
import { useDrizzle } from "~~/server/db/useDrizzle";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone, location, message } = body;

  const contactSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    name: z.string({ message: "Name is required." }),
    phone: z
      .string({ message: "Phone is required." })
      .min(10, "Phone Number Must be 10 Digits")
      .max(10, "Phone Number Must be 10 Digits"),
    location: z.string({ message: "Location is required." }).nonempty(),
    message: z.string({ message: "Message is required." }),
  });

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      message: "Invalid Entry",
      data: result.error.flatten().fieldErrors,
    });
  }

  const { db, connection } = await useDrizzle();

  async function createData() {
    await db.insert(contact).values({
      name: name,
      email: email,
      phone: phone,
      location: location,
      message: message,
    });
  }

  await createData();

  connection.end();

  return {
    status: true,
    message: "Request received! Our team will contact you soon",
  };
});
