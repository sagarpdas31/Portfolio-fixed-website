import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (str = "") =>
    String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

export const sendEmailController = async (req, res) => {
    try {
        const { name, email, msg } = req.body;

        if (!name || !email || !msg) {
            return res
                .status(400)
                .json({ success: false, message: "Please fill all fields" });
        }

        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [process.env.EMAIL_TO],
            replyTo: email,
            subject: `New message from ${name}`,
            html: `
        <h3>New Portfolio Message</h3>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b> ${escapeHtml(msg)}</p>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return res
                .status(500)
                .json({ success: false, message: "Failed to send email" });
        }

        return res
            .status(200)
            .json({ success: true, message: "Your message was sent successfully" });
    } catch (err) {
        console.error("Email error:", err);
        return res
            .status(500)
            .json({ success: false, message: "Something went wrong" });
    }
};