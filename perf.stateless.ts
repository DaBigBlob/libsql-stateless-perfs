import { libsqlExecute, libsqlBatch} from "libsql-stateless";
import { conf } from "./conf.js";

(async () => {
    console.log("running libsql-stateless");
        
    console.time("libsqlBatch");
    const res = await libsqlBatch(conf, [
        {stmt: {
            sql: "select * from contacts where contact_id = ?;",
            args: [
                {
                    type: "integer",
                    value: "3"
                }
            ]
        }},
        {stmt: {
            sql: "select first_name, last_name, email from contacts where contact_id = @koji;",
            named_args: [
                {
                    name: "koji",
                    value: {
                        type: "integer",
                        value: "2"
                    }
                }
            ]
        }},
        {stmt: {
            sql: "insert into contacts (contact_id,first_name,last_name,email,phone) values (?,?,?,?,?);",
            args: [
                {type: "integer", value: "6"},
                {type: "text", value: "glomm"},
                {type: "text", value: "feru"},
                {type: "text", value: "moca@doro.co"},
                {type: "text", value: "001"}
            ]
        }},
        {stmt: {
            sql: "delete from contacts where contact_id = :kkl",
            named_args: [
                {
                    name: "kkl",
                    value: {
                        type: "integer",
                        value: "6"
                    }
                }
            ]
        }}
    ]);
    console.timeEnd("libsqlBatch");
    
    console.log(res.isOk);



    console.time("libsqlExecute");
    const res2 = await libsqlExecute(conf, {
        sql: "select first_name, last_name, email, contact_id from contacts where contact_id = ?;",
        args: [
            {
                type: "integer",
                value: "1"
            }
        ]
    });
    console.timeEnd("libsqlExecute");

    console.log(res2.isOk);
})();