// api/meetups
import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://luiferna2:12345@cluster0.dktuh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();
  const dataValue = result.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  }));
  client.close();
  res.status(201).json({ message: "Get method Succesfully", data: dataValue });
}
export default handler;
