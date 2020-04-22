"use strict";

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const uri = `mongodb+srv://m001-student:etzIdF8fF1KwIIi1@cluster0-sptak.azure.mongodb.net/test?retryWrites=true&w=majority`


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//run node batchImport.js to make the data print in the database once . SENDING AN ARRAY OF OBJS
// for the insertMany( [ {}, {}, ])  for the MDB method

const batchImport = async () => {
  const seats = [];
  const row = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (let r = 0; r < row.length; r++) {
    for (let s = 1; s < 13; s++) {
      seats.push({
        _id: `${row[r]}-${s}`,
        price: 225,
        isBooked: false,
      });
    }
  }

  try {
    await client.connect();

    const db = client.db("test");

    const r = await db.collection("one").insertMany(seats);
    assert.equal(seats.length, r.insertedCount);
    console.log("success");
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
};

batchImport();
