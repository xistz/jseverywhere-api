const mongoose = require("mongoose")

module.exports = {
  connect: (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) => {
    mongoose.set("useNewUrlParser", true)
    mongoose.set("useFindAndModify", false)
    mongoose.set("useCreateIndex", true)
    mongoose.set("useUnifiedTopology", true)
    mongoose.connect(
      DB_HOST, 
      {
        user: DB_USER, 
        pass: DB_PASSWORD, 
        dbName: DB_NAME
      }
    )
    mongoose.connection.on("error", err => {
      console.error(err)
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running."
      )
      process.exit()
    })
  },
  close: () => {
    mongoose.connection.close()
  }
}