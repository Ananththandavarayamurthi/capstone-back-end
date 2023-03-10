import mongodb from "mongodb";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGO_URL;

// Connecting MongoDB
async function connection() {
  const client = new MongoClient(URL);
  await client.connect();
  console.log("MongoDB connected");
  return client;
}

export default connection;
