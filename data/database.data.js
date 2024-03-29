import mongoose from "mongoose";

// Connection of DataBase :

export const connnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch((error) => console.log("ERROR ", error));
};
