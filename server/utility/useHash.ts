import { createHash } from "crypto";

export default function () {
  const salt = process.env.APP_KEY;

  function make(text: string): string {
    return createHash("sha256")
      .update(salt + text)
      .digest("hex");
  }

  function compare(text: string, hash: string): boolean {
    const newHash = make(text);

    console.log(newHash, hash);

    return newHash === hash;
  }

  return {
    make,
    compare,
  };
}
