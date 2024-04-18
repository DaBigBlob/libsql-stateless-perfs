import { createClient } from "@libsql/client/web";
import { conf } from "./conf.js";

(async () => {
    console.log("running @libsql/client/web");
    const client = createClient({
        url: conf.db_url,
        authToken: conf.authToken
    });
    
    console.time("client.batch");
    const res = await client.batch([
        {
            sql: "select * from contacts where contact_id = ?;",
            args: [3]
        },
        {
            sql: "select first_name, last_name, email from contacts where contact_id = @koji;",
            args: {koji: 2}
        },
        {
            sql: "insert into contacts (contact_id,first_name,last_name,email,phone) values (?,?,?,?,?);",
            args: [6,"glomm","feru","moca@doro.co","001"]
        },
        {
            sql: "delete from contacts where contact_id = :kkl",
            args: {kkl: 6}
        }
    ]);
    console.timeEnd("client.batch");

    console.log(!!res);



    console.time("client.execute");
    const res2 = await client.execute({
        sql: "select first_name, last_name, email, contact_id from contacts where contact_id = ?;",
        args: [1]
    });
    console.timeEnd("client.execute");

    console.log(!!res2);
})();