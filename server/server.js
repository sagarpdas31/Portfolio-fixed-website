import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";
import path from "path";
import job from "./crone/crone.js";

// Configure environment variables
dotenv.config();

// Connect to MongoDB
connectDB();
job.start();

// Initialize express
const app = express();

// Middlewares
app.use(cors({
    origin: ['http://localhost:3000', 'https://portfolio-fixed-website.onrender.com']
}));

// Port
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/api/v1/portfolio", contactRoutes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")))

    //react app
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}


// Root route
app.get("/", (_req, res) => {
    res.send("<h1>Welcome to My Portfolio App</h1>");
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server Running on PORT No: ${PORT} `.bgYellow.black);
});
