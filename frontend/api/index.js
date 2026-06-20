import mongoose from "mongoose";
import app from "../../backend/src/app.js";
import connectDb from "../../backend/src/config/db.js";

export default async function handler(req, res) {
  // Ensure we are connected to MongoDB
  if (mongoose.connection.readyState !== 1 && mongoose.connection.readyState !== 2) {
    await connectDb();
  }

  // Forward the request and response to the Express app
  return app(req, res);
}
