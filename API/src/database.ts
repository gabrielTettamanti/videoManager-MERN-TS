import mongoose from "mongoose";
import { ConnectionOptions } from "tls";
import config from "./config";

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASSWORD
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
        console.log('Database is connected to:', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()