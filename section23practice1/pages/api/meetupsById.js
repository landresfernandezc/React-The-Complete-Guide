// api/meetups
import { MongoClient } from "mongodb";
import { ObjectId } from "bson";
async function handler(req, res) {
  const data = req.body;
  const { meetupId } = data;
  const client = await MongoClient.connect(
    "mongodb+srv://luiferna2:12345@cluster0.dktuh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();
  console.log(result)
  res
    .status(201)
    .json({
      message: "Get method Succesfully",
      data: {
        id: result._id.toString(),
        title: result.title,
        description: result.description,
        address: result.address,
        image: result.image
      },
    });
}
export default handler;
