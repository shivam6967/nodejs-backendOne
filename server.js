import { connnectDB } from "./data/database.data.js";
import { app } from "./app.js";

const port = process.env.PORT;

connnectDB();

app.listen(port , () => {
    console.log(`Server is Started at the PORT : ${port} in ${process.env.NODE_ENV} Mode `);
});