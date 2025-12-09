import { d as defineEventHandler, r as readBody, c as createError, g as getCookie, s as setCookie, a as setUserSession } from '../../../_/nitro.mjs';
import { and, eq, gt } from 'drizzle-orm';
import { u as useDrizzle, l as loginAttempts, a as users } from '../../../_/useDrizzle.mjs';
import { createHash } from 'crypto';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/mysql-core';
import 'drizzle-orm/singlestore';

function useHash() {
  const salt = process.env.APP_KEY;
  function make(text) {
    return createHash("sha256").update(salt + text).digest("hex");
  }
  function compare(text, hash) {
    const newHash = make(text);
    console.log(newHash, hash);
    return newHash === hash;
  }
  return {
    make,
    compare
  };
}

const SESSION_COOKIE_NAME = "user-session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1e3;
const ATTEMPT_WINDOW_SECONDS = 300;
const MAX_LOGIN_ATTEMPTS = 4;
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || typeof email !== "string" || !password || typeof password !== "string") {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and password are required"
    });
  }
  let sessionId = getCookie(event, SESSION_COOKIE_NAME);
  const { compare} = useHash();
  const { db, connection } = await useDrizzle();
  if (sessionId) {
    const result = await db.select().from(loginAttempts).where(
      and(
        eq(loginAttempts.sessionId, sessionId),
        eq(loginAttempts.email, email),
        gt(
          loginAttempts.attemptedAt,
          new Date(Date.now() - ATTEMPT_WINDOW_SECONDS * 1e3)
        )
      )
    );
    if (result.length >= MAX_LOGIN_ATTEMPTS) {
      throw createError({
        statusCode: 429,
        statusMessage: "Too many failed login attempts. Please try again later."
      });
    }
  } else {
    sessionId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
    setCookie(event, SESSION_COOKIE_NAME, sessionId, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      expires: expiresAt
    });
  }
  const user = await db.select().from(users).where(eq(users.email, email));
  if (user.length == 0 || user.length > 0 && !compare(password, user[0].password)) {
    await db.insert(loginAttempts).values({
      sessionId,
      email,
      attemptedAt: new Date(Date.now())
    });
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials"
    });
  }
  await setUserSession(event, {
    user: {
      name: user[0].name,
      email: user[0].email
    }
  });
  connection.end();
  return {
    statusMessage: "Login Success",
    status: true
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
