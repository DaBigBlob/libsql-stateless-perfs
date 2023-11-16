import type { Config } from "drizzle-kit";
import { conf } from "./conf";
 
export default {
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: conf.db_url,
    authToken: conf.authToken
  }
} satisfies Config;