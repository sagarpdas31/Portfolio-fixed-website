// import express from 'express';
// import Contact from '../models/contactModel.js';

// const router = express.Router();

// // POST route to handle form submission
// router.post("/sendEmail", async (req, res) => {
//     try {
//         const { name, email, message } = req.body;

//         const newContact = new Contact({
//             name,
//             email,
//             message,
//         });
//         await newContact.save();
//         res.status(200).json({ success: true, message: "Message sent successfully!" });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// });

// export default router; // Use `export default`


import express from 'express';
import Contact from '../models/contactModel.js';
import sgMail from '@sendgrid/mail';

const router = express.Router();

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST route to handle form submission
router.post("/sendEmail", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save to MongoDB
        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();

        // Send email via SendGrid
        const msg = {
            to: process.env.SENDGRID_TO_EMAIL, // Your email (where you receive messages)
            from: process.env.SENDGRID_FROM_EMAIL, // Your verified sender email
            replyTo: email, // Visitor's email (so you can reply directly)
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message: ${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await sgMail.send(msg);

        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Contact Form Error:", error);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
});

export default router;