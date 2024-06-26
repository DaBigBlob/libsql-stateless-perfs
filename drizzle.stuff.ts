import { createClient } from "libsql-stateless-easy";
import { drizzle } from 'drizzle-orm/libsql';
import { conf } from "./conf.js";
import { contacts } from "./drizzle/schema.js";

(async () => {
    const client = createClient({
        url: conf.db_url,
        authToken: conf.authToken
    });

    const db = drizzle(client);

    const res = await db.select().from(contacts).all()
    console.log(res);
})();