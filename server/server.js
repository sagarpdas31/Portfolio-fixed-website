

// import express from "express";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import job from "./cron/cron.js";

// dotenv.config();
// connectDB();
// job.start();

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const allowedOrigins = [
//     "https://portfolio-fixed-website-w69n.onrender.com",
//     "http://localhost:3000",
//     "http://localhost:3001",
//     "http://127.0.0.1:3000",
//     "http://127.0.0.1:3001",
// ];

// const corsOptions = {
//     origin: (origin, callback) => {
//         // origin undefined = Postman / same-origin / server-to-server
//         if (!origin || allowedOrigins.includes(origin)) {
//             return callback(null, true);
//         }
//         return callback(new Error(`CORS blocked: ${origin}`));
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// };

// // Routes se PEHLE, preflight (OPTIONS) bhi handle hota hai
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// const PORT = process.env.PORT || 8080; // client proxy se match

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// app.use("/api/v1/portfolio", contactRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "..", "client", "build")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
//     });
// } else {
//     app.get("/", (_req, res) => {
//         res.send("<h1>Welcome to My Portfolio App</h1>");
//     });
// }

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// import "dotenv/config"; // MUST be first so env vars load before other imports run
// import express from "express";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import job from "./cron/cron.js";

// connectDB();
// job.start();

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const allowedOrigins = [
//     "https://portfolio-fixed-website-w69n.onrender.com",
//     "http://localhost:3000",
//     "http://localhost:3001",
//     "http://127.0.0.1:3000",
//     "http://127.0.0.1:3001",
// ];

// const corsOptions = {
//     origin: (origin, callback) => {
//         // origin undefined = Postman / same-origin / server-to-server
//         if (!origin || allowedOrigins.includes(origin)) {
//             return callback(null, true);
//         }
//         return callback(new Error(`CORS blocked: ${origin}`));
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// };

// // Before routes; preflight (OPTIONS) is handled too
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// const PORT = process.env.PORT || 8080;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// app.use("/api/v1/portfolio", contactRoutes);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "..", "client", "build")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
//     });
// } else {
//     app.get("/", (_req, res) => {
//         res.send("<h1>Welcome to My Portfolio App</h1>");
//     });
// }

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import job from "./cron/cron.js";

dotenv.config();
connectDB();
job.start();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = [
    "https://portfolio-fixed-website-w69n.onrender.com",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/portfolio", contactRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
    });
} else {
    app.get("/", (_req, res) => {
        res.send("<h1>Welcome to My Portfolio App</h1>");
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});