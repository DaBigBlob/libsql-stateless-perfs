# Performance tests and comparison for
1. ##  [`libsql-stateless`](https://github.com/DaBigBlob/libsql-stateless)
2. ##  [`libsql-stateless-easy`](https://github.com/DaBigBlob/libsql-stateless-easy)
3. ##  [`@libsql/client/web`](https://github.com/libsql/libsql-client-ts)

# you need
1. a unix-like os (macos, bsd, linux, etc); for windows see last
2. have [bun](https://bun.sh/docs/installation) installed
3. create `conf.ts` as:
```ts
//in conf.ts
export const conf = {
    db_url: "https://dgbul.tld",
    authToken: "authtokenstringsgda"
}
```
4. `npm i`

# run perf tests
`npm run perf:all`

# for windows
i dont have any windows machine.\
you can obviously reuse `perf.easy.ts`, `perf.official.ts`, and `perf.stateless.ts`\
but you have to run them individually or write scripts yourself.