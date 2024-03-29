import mongoose from "mongoose";

// Connection of DataBase :

export const connnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then((c) => console.log(`DataBase is Connect at the Host ${c.connection.host}`))
    .catch((error) => console.log("ERROR ", error));
};
