import { libsqlExecute, libsqlBatch} from "libsql-stateless";
import { skjdgfksg } from "./conf";

(async () => {
    const conf = skjdgfksg;
    
    console.time("libsqlBatch");
    const res = await libsqlBatch(conf, [
        {stmt: {sql: "select * from contacts where contact_id = 3;"}},
        {
            stmt: {sql: "select first_name, last_name, email from contacts where contact_id = 2;"},
        },
        {stmt: {sql: "select * from contacts where wife_id = ?;", args: [{type: "null"}]}}
    ]);
    console.timeEnd("libsqlBatch");
    
    console.log(res.isOk);



    console.time("libsqlExecute");
    const res2 = await libsqlExecute(conf, {sql: "select first_name, last_name, email from contacts where contact_id = 1;"});
    console.timeEnd("libsqlExecute");

    console.log(res2.isOk);
})();