import { createClient } from "libsql-stateless-easy";
import { conf } from "./conf.js";

(async () => {
    console.log("running libsql-stateless-easy");
    
    console.time("libsqlBatch");
    const clinet = createClient({
        url: conf.db_url,
        authToken: conf.authToken
    });
    const res = await clinet.batch([
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
    console.timeEnd("libsqlBatch");

    console.log(res[0]);



    console.time("libsqlExecute");
    const res2 = await clinet.execute({
        sql: "select first_name, last_name, email, contact_id from contacts where contact_id = ?;",
        args: [1]
    });
    console.timeEnd("libsqlExecute");

    console.log(!!res2);
})();