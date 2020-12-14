import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

const port = 8001;
const app = new expressive.App();
// route with dynamic parameter
app.get("/", async(req, res) => {
    await res.json([
        { id: 2, name: "Jim Doe", phone: "12425323" },
    ]);
});
const server = await app.listen(port);
// deno run --allow-net --allow-read server.ts
console.log("app listening on port " + server.port);