
import {fetch, Request} from "cross-fetch";

(async () => {
    const req = new Request("https://api.hman.io/ip", {method: 'GET'})
    const res = await fetch(req, {method: req.method});
    console.log(await res.text());
})();
