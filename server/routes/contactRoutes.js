// import express from "express";
// import mongoose from "mongoose";
// import { Resend } from "resend";
// import Contact from "../models/contactModel.js";

// const router = express.Router();

// const escapeHtml = (str = "") =>
//     String(str)
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;");

// // POST route to handle form submission
// router.post("/sendEmail", async (req, res) => {
//     try {
//         const { name, email, message } = req.body;

//         if (!name || !email || !message) {
//             return res
//                 .status(400)
//                 .json({ success: false, message: "Please fill all fields" });
//         }

//         if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
//             console.error("Missing RESEND_API_KEY or EMAIL_TO in .env");
//             return res.status(500).json({
//                 success: false,
//                 message: "Server email config missing (RESEND_API_KEY / EMAIL_TO)",
//             });
//         }

//         // Save to MongoDB only if connected (1 = connected)
//         if (mongoose.connection.readyState === 1) {
//             try {
//                 await new Contact({ name, email, message }).save();
//             } catch (dbError) {
//                 console.error("MongoDB save failed:", dbError.message);
//             }
//         } else {
//             console.warn("MongoDB not connected, skipping save");
//         }

//         // Created here so .env is already loaded
//         const resend = new Resend(process.env.RESEND_API_KEY);

//         const { error } = await resend.emails.send({
//             from: "Portfolio Contact <onboarding@resend.dev>",
//             to: [process.env.EMAIL_TO],
//             replyTo: email,
//             subject: `New Contact Form Submission from ${name}`,
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//             html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${escapeHtml(name)}</p>
//         <p><strong>Email:</strong> ${escapeHtml(email)}</p>
//         <p><strong>Message:</strong></p>
//         <p>${escapeHtml(message)}</p>
//       `,
//         });

//         if (error) {
//             console.error("Resend error:", error);
//             return res.status(500).json({
//                 success: false,
//                 message: error.message || "Failed to send email",
//             });
//         }

//         return res
//             .status(200)
//             .json({ success: true, message: "Message sent successfully!" });
//     } catch (error) {
//         console.error("Contact Form Error:", error);
//         return res
//             .status(500)
//             .json({ success: false, message: error.message || "Server Error" });
//     }
// });

// export default router;



import express from "express";
import mongoose from "mongoose";
import { Resend } from "resend";
import Contact from "../models/contactModel.js";

const router = express.Router();

const escapeHtml = (str = "") =>
    String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

// Header me use hone wale naam se newline, quotes, <> hata do (header injection se bachne ke liye)
const cleanHeaderText = (str = "") =>
    String(str).replace(/[\r\n"<>]/g, " ").replace(/\s+/g, " ").trim().slice(0, 60);

router.post("/sendEmail", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res
                .status(400)
                .json({ success: false, message: "Please fill all fields" });
        }

        if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
            console.error("Missing RESEND_API_KEY or EMAIL_TO in .env");
            return res.status(500).json({
                success: false,
                message: "Server email config missing (RESEND_API_KEY / EMAIL_TO)",
            });
        }

        // Save to MongoDB only if connected
        if (mongoose.connection.readyState === 1) {
            try {
                await new Contact({ name, email, message }).save();
            } catch (dbError) {
                console.error("MongoDB save failed:", dbError.message);
            }
        } else {
            console.warn("MongoDB not connected, skipping save");
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const safeName = cleanHeaderText(name) || "Visitor";
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
        const sentAt = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "short",
        });

        const { error } = await resend.emails.send({
            from: `${safeName} via Portfolio <onboarding@resend.dev>`,
            to: [process.env.EMAIL_TO],
            replyTo: email,
            subject: `📩 New message from ${safeName} | Portfolio`,
            text: `New message from your portfolio\n\nName: ${safeName}\nEmail: ${email}\nTime: ${sentAt}\n\nMessage:\n${message}`,
            html: `
        <div style="background:#f4f6f8;padding:24px;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

            <div style="background:#138781;padding:20px 24px;">
              <h2 style="margin:0;color:#ffffff;font-size:20px;">📩 New Portfolio Message</h2>
              <p style="margin:4px 0 0;color:#d6f1ef;font-size:13px;">${escapeHtml(sentAt)}</p>
            </div>

            <div style="padding:24px;">
              <table style="width:100%;border-collapse:collapse;font-size:15px;">
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:80px;">Name</td>
                  <td style="padding:8px 0;color:#111827;font-weight:bold;">${escapeHtml(safeName)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Email</td>
                  <td style="padding:8px 0;">
                    <a href="mailto:${safeEmail}" style="color:#138781;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:16px;padding:16px;background:#f9fafb;border-left:4px solid #138781;border-radius:6px;color:#111827;font-size:15px;line-height:1.6;">
                ${safeMessage}
              </div>

              <div style="margin-top:24px;text-align:center;">
                <a href="mailto:${safeEmail}?subject=Re: Your message on my portfolio"
                   style="display:inline-block;background:#138781;color:#ffffff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;">
                  Reply to ${escapeHtml(safeName)}
                </a>
              </div>
            </div>

            <div style="padding:14px 24px;background:#f4f6f8;color:#9ca3af;font-size:12px;text-align:center;">
              Sent from your portfolio contact form
            </div>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return res.status(500).json({
                success: false,
                message: error.message || "Failed to send email",
            });
        }

        return res
            .status(200)
            .json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Contact Form Error:", error);
        return res
            .status(500)
            .json({ success: false, message: error.message || "Server Error" });
    }
});

export default router;fdbvvdbvjbdjvbdjfvbjdbvjdbvjbdjvbdjfbj