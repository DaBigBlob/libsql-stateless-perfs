import type { Config } from "drizzle-kit";
import { conf } from "./conf.js";
 
export default {
    schema: "./drizzle/schema.ts",
    out: "./drizzle",
    driver: "turso",
    dbCredentials: {
        url: conf.db_url,
        authToken: conf.authToken
    }
} satisfies Config;