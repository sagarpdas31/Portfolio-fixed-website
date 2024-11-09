// import React from 'react'
// import Typewriter from "typewriter-effect"
// import './home.css'
// // import Resume from "../../assets/docs/resume.pdf"
// import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// import { useTheme } from '../../Context/ThemeContext';
// import Fade from 'react-reveal/Fade';
// const Home = () => {
//     const [theme, setTheme] = useTheme();
//     //handle theme
//     const handleTheme = () => {
//         setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
//     };
//     const resumeUrl = 'https://drive.google.com/file/d/1fWpqxJBehKwG-NwtsaehZU9yQjgsCgjd/view?usp=drive_link';
//     return (
//         <>

//             <div className="container-fluid home-container" id="home">
//                 <div className="theme-btn" onClick={handleTheme}>
//                     {theme === "light" ? (
//                         <BsFillMoonStarsFill size={30} />
//                     ) : (
//                         <BsFillSunFill size={30} />
//                     )}
//                 </div>
//                 <div className="contianer home-content">
//                     <Fade right>
//                         <h2>Hi I'm sagar</h2>
//                         <h1>
//                             <Typewriter options={{
//                                 strings: ["Full Stack Developer !", "MERN Stack Developer !", "Data Structure & Algorithms !", "C++ !"],
//                                 autoStart: true,
//                                 loop: true
//                             }} />
//                         </h1>
//                     </Fade>
//                     <Fade bottom>
//                         <div className="home-buttons">
//                             <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=8539067315' rel='noreferrer' target='_blank'>Hire Me</a>
//                             <a className='btn btn-cv' href={resumeUrl} rel="noopener noreferrer">My Resume</a>
//                         </div>
//                     </Fade>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Home


import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import './home.css';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from '../../Context/ThemeContext';
import Fade from 'react-reveal/Fade';

const Home = () => {
    const [theme, setTheme] = useTheme();
    const [isLoading, setIsLoading] = useState(true);

    // Handle theme toggle
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust timing as needed
        return () => clearTimeout(timer);
    }, []);

    const resumeUrl = 'https://drive.google.com/file/d/1fWpqxJBehKwG-NwtsaehZU9yQjgsCgjd/view?usp=drive_link';

    return (
        <div className="container-fluid home-container" id="home">
            <div className="theme-btn" onClick={handleTheme}>
                {theme === "light" ? (
                    <BsFillMoonStarsFill size={30} />
                ) : (
                    <BsFillSunFill size={30} />
                )}
            </div>
            
            {isLoading ? (
                // Skeleton loader with left-to-right animation
                <div className="skeleton-loader"></div>
            ) : (
                <div className="container home-content">
                    <Fade right>
                        <h2>Hi, I'm Sagar</h2>
                        <h1>
                            <Typewriter options={{
                                strings: ["Full Stack Developer!", "MERN Stack Developer!", "Data Structure & Algorithms!", "C++!"],
                                autoStart: true,
                                loop: true
                            }} />
                        </h1>
                    </Fade>
                    <Fade bottom>
                        <div className="home-buttons">
                            <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=8539067315' target='_blank' rel='noreferrer'>Hire Me</a>
                            <a className='btn btn-cv' href={resumeUrl} target='_blank' rel="noopener noreferrer">My Resume</a>
                        </div>
                    </Fade>
                </div>
            )}
        </div>
    );
};

export default Home;
