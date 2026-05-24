// import express from "express";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import cors from "cors";
// import path from "path";
// import job from "./cron/cron.js";

// // Configure environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();
// job.start();

// // Initialize express
// const app = express();

// // Middlewares
// app.use(cors({
//     origin: ['https://portfolio-fixed-website-w69n.onrender.com', 'http://localhost:3000']
// }));

// // Port
// const PORT = process.env.PORT || 8000;
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(morgan('dev'));

// // Routes
// app.use("/api/v1/portfolio", contactRoutes);
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/build")))
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
//     })
// }

// // Root route
// app.get("/", (_req, res) => {
//     res.send("<h1>Welcome to My Portfolio App</h1>");
// });



// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server Running on PORT No: ${PORT} `.bgYellow.black);
// });


import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";  // ✅ add this
import job from "./cron/cron.js";

dotenv.config();
connectDB();
job.start();

const app = express();

// ✅ Correct __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// __dirname is now always /opt/render/project/src/server/
// so joining "../client/build" correctly gives /opt/render/project/src/client/build

app.use(cors({
    origin: ['https://portfolio-fixed-website-w69n.onrender.com', 'http://localhost:3000']
}));

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/api/v1/portfolio", contactRoutes);

if (process.env.NODE_ENV === "production") {
    // ✅ Goes up from server/ to root, then into client/build
    app.use(express.static(path.join(__dirname, "..", "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});