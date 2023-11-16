import { createClient } from "libsql-stateless-easy";
import { drizzle } from 'drizzle-orm/libsql';
import { conf } from "./conf";
import { sql } from "drizzle-orm";

(async () => {
    const client = createClient({
        url: conf.db_url,
        authToken: conf.authToken
    });

    const db = drizzle(client);
 
    const result = await db.select().from(sql`contacts`).all();
    console.log(result);
})();