const mongoose = require("mongoose")
const connectString = process.env.MONGO_DB
if (!connectString) {
  console.log("no connection string")
  process.exit(1)
}

mongoose.connect(connectString, { useNewUrlParser: true })
const db = mongoose.connection

db.on("error", (err) => {
  console.log(err, "Mongodb.js error")
  process.exit(1)
})

db.once("open", () => {
  console.log("Mongo db is open")
})

module.exports = db
