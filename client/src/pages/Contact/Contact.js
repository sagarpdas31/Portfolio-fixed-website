// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "./Contact.css";
// import axios from "axios";
// import Rotate from "react-reveal/Rotate";
// import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

// const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [msg, setMsg] = useState("");
//     const [loading, setLoading] = useState(false);

//     // Handle submit button
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!name.trim() || !email.trim() || !msg.trim()) {
//             toast.error("Please provide all fields");
//             return;
//         }

//         try {
//             setLoading(true);

//             // Relative URL: local me proxy, production me same domain
//             const res = await axios.post("/api/v1/portfolio/sendEmail", {
//                 name,
//                 email,
//                 message: msg, // server "message" expect karta hai
//             });

//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 setName("");
//                 setEmail("");
//                 setMsg("");
//             } else {
//                 toast.error(res.data.message || "Error sending message");
//             }
//         } catch (error) {
//             console.error("Request Error:", error.response?.data || error.message);
//             toast.error(
//                 error.response?.data?.message || "Something went wrong!"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <div className="contact">
//                 <div className="card0 border-0" id="contact">
//                     <div className="row">
//                         <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
//                             <div className="image-card">
//                                 <img
//                                     src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
//                                     alt="contact"
//                                     className="image"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 py-4">
//                             <Rotate>
//                                 <div className="card2 d-flex px-3 py-2">
//                                     <div className="row">
//                                         <div className="row">
//                                             <h6 className="text-design">
//                                                 <a href="https://linkedin.com/in/sagar-kumar-das-889380246" target="_blank" rel="noopener noreferrer">
//                                                     <BsLinkedin color="blue" size={32} className="mx-2" />
//                                                 </a>
//                                                 <a href="https://github.com/Sagarkumardas2002" target="_blank" rel="noopener noreferrer">
//                                                     <BsGithub color="black" size={32} className="mx-2" />
//                                                 </a>
//                                                 <a href="https://twitter.com/SagarDas39637459" target="_blank" rel="noopener noreferrer">
//                                                     <BsTwitter color="blue" size={32} className="mx-2" />
//                                                 </a>
//                                             </h6>
//                                         </div>

//                                         <div className="row field-design mb-3">
//                                             <div className="line" />
//                                             <small className="or text-center">OR</small>
//                                             <div className="line" />
//                                         </div>
//                                         <div className="row field-design">
//                                             <input
//                                                 type="text"
//                                                 name="name"
//                                                 placeholder="Enter your Name"
//                                                 className="mb-3"
//                                                 value={name}
//                                                 onChange={(e) => setName(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className="row field-design">
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 placeholder="Enter Your Email Address"
//                                                 className="mb-3"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className="row field-design">
//                                             <textarea
//                                                 name="msg"
//                                                 placeholder="Write your message"
//                                                 className="mb-2"
//                                                 value={msg}
//                                                 onChange={(e) => setMsg(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className="row my-2">
//                                             <button
//                                                 className="button"
//                                                 onClick={handleSubmit}
//                                                 disabled={loading}
//                                             >
//                                                 {loading ? "SENDING..." : "SEND MESSAGE"}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Rotate>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contact;


import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import axios from "axios";
import Rotate from "react-reveal/Rotate";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

// Local me .env.development se aata hai, production me khali (same domain)
// const API_URL = process.env.REACT_APP_API_URL || "";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT CLICKED", { name, email, msg, API_URL });

        if (!name.trim() || !email.trim() || !msg.trim()) {
            toast.error("Please provide all fields");
            return;
        }

        try {
            setLoading(true);
            const url = `${API_URL}/api/v1/portfolio/sendEmail`;
            console.log("POSTING TO:", url);

            const res = await axios.post(url, {
                name,
                email,
                message: msg, // server "message" expect karta hai
            });

            console.log("RESPONSE:", res.status, res.data);

            if (res.data.success) {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message || "Error sending message");
            }
        } catch (error) {
            console.log("ERROR status:", error.response?.status);
            console.log("ERROR data:", error.response?.data);
            console.log("ERROR message:", error.message);
            toast.error(error.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
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
                                            <button
                                                type="button"
                                                className="button"
                                                onClick={handleSubmit}
                                                disabled={loading}
                                            >
                                                {loading ? "SENDING..." : "SEND MESSAGE"}
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