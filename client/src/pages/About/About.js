import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id="about">
                    <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png" alt="profile_pic" />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content p-3" id="grow">
                            <h1 className='text-center'>About Me</h1>
                            <p>
                                I am <strong style={{ color: '#32cd32' }} >SAGAR KUMAR DAS</strong> a final year Computer Science and Engineering student at <strong style={{ color: '#ff1493' }}>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY RANCHI</strong> with a passion for full-stack web development and <strong style={{ color: '#ff1493' }}>MERN technologies.</strong>  Driven by a love for learning, I excel at solving real-life problems through innovative projects, continually enhancing my skills in web technologies along with good hold in Data <strong style={{ color: '#ff1493' }}>Structures and Algorithms (DSA)</strong> and competitive programming. My commitment to mastering computer science fundamentals empowers me to tackle complex challenges with creative solutions.

                                As a proactive learner, I expand my expertise in development, problem-solving, team leading and staying updated on the latest tech advancements. A collaborative team player who values community, I am always ready to assist others. My goal is to create impactful software solutions that deliver tangible benefits. With a blend of diligence and adaptability, I am dedicated to excellence and innovation, eager to contribute to meaningful projects and grow as a versatile engineering professional.
                            </p>
                        </div>
                    </div>
                    <div className="row coding-profiles">
                        <div className="col-md-4 col-xl-4 col-lg-4 col-xs-12 profile-item text-center">
                            <h3>Codeforces</h3>
                            <a href="https://www.geeksforgeeks.org/user/sagarpkdas_31/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000" alt="Codeforces" className="profile-logo codeforces-logo"  />
                            </a>
                        </div>
                        <div className="col-md-4 col-xl-4 col-lg-4 col-xs-12 profile-item text-center">
                            <h3>LeetCode</h3>
                            <a href="https://leetcode.com/u/sagarkumarrdas2002/" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode"  className="profile-logo leetcode-logo"/>
                            </a>
                        </div>
                        <div className="col-md-4 col-xl-4 col-lg-4 col-xs-12 profile-item text-center">
                            <h3>CodeChef</h3>
                            <a href="https://www.codechef.com/users/sagarkdas1015" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=O4SEeX66BY8o&format=png&color=000000" alt="CodeChef" className="profile-logo codechef-logo"  />
                            </a>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}

export default About;
