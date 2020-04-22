// "use strict";
// const MongoClient = require("mongodb").MongoClient;
// require("dotenv").config();

// const dbFunction = async (dbName, collection, item) => {
//   // create a new client
 
//   const uri = `mongodb+srv://m001-student:etzIdF8fF1KwIIi1@cluster0-sptak.azure.mongodb.net/test?retryWrites=true&w=majority`;

//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   await client.connect(async (err) => {
//     if (err) throw err;
//     console.log("connected!");
//     const db = client.db(dbName);
//     let dbNotEmpty = undefined;

//     // perform actions on the collection object
//     await db
//       .collection(collection)
//       .find()
//       .toArray(async (err, result) => {
//         if (err) throw err;
//         if (result.length) {
//           console.log(true);
//           dbNotEmpty = true;
//         } else {
//           console.log(false);
//           dbNotEmpty = false;
//         }
//         console.log(dbNotEmpty);
//         if (!dbNotEmpty) {
//           // await db.collection(collection).insertOne(item);


//           console.log("ADDED there!");
//         } else {
//           console.log("already there!");
//         }
//         client.close();
//         console.log("disconnected!");
//       });
    // perform actions on the collection object
//   });
// };
// dbFunction("mongoWorkshop", "flights", { name: "PETER!" });

// module.exports = dbFunction;

// const dataImport = async () => {
//     let body = req.body
//     console.log(body, "test")
//   const client = new MongoClient(
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
//     {
// useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );
