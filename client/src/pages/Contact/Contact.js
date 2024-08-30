import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import axios from "axios";
import Rotate from "react-reveal/Rotate";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    // Handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !msg) {
            toast.error("Please provide all fields");
            return;
        }

        try {
            // Send data to backend API
            // const res = await axios.post("https://portfolio-fixed-website.onrender.com/api/v1/portfolio/sendEmail", {
         const res = await axios.post("/api/v1/portfolio/sendEmail", {
                name,
                email,
                message: msg,  
            });

            if (res.data.success) {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error("Error sending message");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        }
    };
    return (
        <>
            <div className="contact">
                <div className="card0 border-0" id="contact">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="image-card">
                                <img
                                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                                    alt="contact"
                                    className="image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 py-4">
                            <Rotate>
                                <div className="card2 d-flex px-3 py-2">
                                    <div className="row">
                                        <div className="row">
                                            <h6 className="text-design">
                                                <a href="https://linkedin.com/in/sagar-kumar-das-889380246" target="_blank" rel="noopener noreferrer">
                                                    <BsLinkedin color="blue" size={32} className="mx-2" />
                                                </a>
                                                <a href="https://github.com/Sagarkumardas2002" target="_blank" rel="noopener noreferrer">
                                                    <BsGithub color="black" size={32} className="mx-2" />
                                                </a>
                                                <a href="https://twitter.com/SagarDas39637459" target="_blank" rel="noopener noreferrer">
                                                    <BsTwitter color="blue" size={32} className="mx-2" />
                                                </a>
                                            </h6>
                                        </div>

                                        <div className="row field-design mb-3">
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                        </div>
                                        <div className="row field-design">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your Name"
                                                className="mb-3"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="row field-design">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter Your Email Address"
                                                className="mb-3"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="row field-design">
                                            <textarea
                                                name="msg"
                                                placeholder="Write your message"
                                                className="mb-2"
                                                value={msg}
                                                onChange={(e) => setMsg(e.target.value)}
                                            />
                                        </div>
                                        <div className="row my-2">
                                            <button className="button" onClick={handleSubmit}>
                                                SEND MESSAGE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
