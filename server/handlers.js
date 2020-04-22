"use strict";
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const getSeats = async (req, res) => {
  const uri = `mongodb+srv://m001-student:etzIdF8fF1KwIIi1@cluster0-sptak.azure.mongodb.net/test?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = "test";
  const collection = "one";

  console.log("test getseats");

  await client.connect(async (err) => {
    console.log("connected");
    const db = client.db(dbName);

    try {
      await db
        .collection(collection)
        .find()
        .toArray()
        .then((data) => {
          const seats = {};
          data.forEach((item) => {
            seats[item._id] = { price: item.price, isBooked: item.isBooked };
          });

          return res.json({
            seats: seats,
            numOfRows: 8,
            seatsPerRow: 12,
          });
        });
    } catch (err) {
      console.log(err);
    }
  });

  client.close();
  console.log("closed connection");
};

const bookSeats = async (req, res) => {
  const uri = `mongodb+srv://m001-student:etzIdF8fF1KwIIi1@cluster0-sptak.azure.mongodb.net/test?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = "test";
  const collection = "one";
  let body = req.body;
  console.log(body);

  const seatToChange = body.seatId;

  await client.connect(async (err) => {
    console.log(" Bookseats connected");
    const db = client.db(dbName);
    const newValues = { $set: { isBooked: true } };
    try {
      const r = await db
        .collection(collection)
        .updateOne({ _id: seatToChange }, newValues);

      assert.equal(1, r.matchedCount);
      assert.equal(1, r.modifiedCount);

      const r2 = await db.collection("clients").insertOne(body);
      assert.equal(1, r.insertedCount);
      Promise.all([r, r2]).then(() => {
          return res.status(200).json({
              status: 200,
              success: true,
            });
        });

        console.log('disconnected!')
        // client.close();

      //   await db.collection(collection).update(
      //     { _id: seatToChange },
      //     {
      //       isBooked: true,
      //     }
      //     );
    } catch (err) {
      console.log(err);
    }
  });
  //   client.close(); dont put here
};

module.exports = { getSeats, bookSeats };
