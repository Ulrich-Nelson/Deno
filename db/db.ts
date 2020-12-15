import { config } from '../config/config.ts';
import { MongoClient } from "https://deno.land/x/mongo@v1.0.0/mod.ts";

const client = new MongoClient();
await client.connect(config.DB_URL);

export const db = client.database("DataDeno");