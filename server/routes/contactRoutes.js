import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

// POST route to handle form submission
router.post("/sendEmail", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default router; // Use `export default`
