const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = process.env.DB_URL + process.env.DB_PORT + process.env.DB_NAME
console.log(db.url)
db.flight = require("./Flight.js")(mongoose)

module.exports = db
