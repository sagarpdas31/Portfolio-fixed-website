import React from 'react'
import './Project.css'
import RubberBand from "react-reveal/RubberBand"
import Spin from "react-reveal/Spin"

const Project = () => {
    return (
        <>
            <div className="container project" id="project">
                <RubberBand>
                    <h2 className='text-center col-12 mt-3 mb-1 text-uppercase'>My Recent Projects </h2>
                    <p className='text-center '> 👉 Here are my top projects with live link and source code </p>
                </RubberBand>

                {/* card design */}
                <div className="row " id="ads">
                    <Spin>
                        <div className="col-md-4 px-6">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://e0.pxfuel.com/wallpapers/610/841/desktop-wallpaper-social-media-top-47-social-media-original-100-marketing.jpg"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Chat Web Application</h5>
                                    </div>
                                    <div className="button-row">
                                        <a
                                            className="ad-btn"
                                            href="https://socilamediafinalfixed-9iof.onrender.com/chat"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project Link
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA59ZURr13bf01VlgjER0nV15Ir8QK9xtI9w&usqp=CAU"
                                        alt="project3"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Ecommerce Website</h5>
                                    </div>
                                    <div className="button-row">
                                        <a
                                            className="ad-btn"
                                            href="https://ecom-final-fixed.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project Link
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-6">
                            <div className="card rounded">
                                <div className="card-image">
                                    <img
                                        src="https://i.ytimg.com/vi/LdtRhnXXN8k/maxresdefault.jpg"
                                        alt="project2"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Next.js</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">Mongo</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Video Calling Website</h5>
                                    </div>
                                    <div className="button-row">
                                        <a
                                            className="ad-btn"
                                            href="https://flora-frontend.onrender.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project Link
                                        </a>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <img
                                        src="https://socialwall.me/en/wp-content/uploads/2017/12/social-wall-card.png"
                                        alt="project6"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">LinkLoom Social Media</h5>
                                    </div>
                                    <div className="button-row">
                                        <a
                                            className="ad-btn"
                                            href="https://linkloomsocialmedia.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project Link
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <img
                                        src="https://www.swic.edu/wp-content/uploads/2021/05/portfolio.png"
                                        alt="project4"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">PortFolio Website</h5>
                                    </div>
                                    <div className="button-row">
                                        <a
                                            className="ad-btn"
                                            href="https://portfolio-fixed-website.onrender.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project Link
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 px-6">
                            <div className="card rounded">
                                <div className="card-image">
                                    <img
                                        src="https://rishihood.edu.in/wp-content/uploads/2021/11/16-1.png"
                                        alt="project5"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">Python</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Flora-Vision</h5>
                                    </div>
                                    <div className="button-row">
                                        <a
                                            className="ad-btn"
                                            href="https://flora-frontend.onrender.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project Link
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Spin>
                </div>
            </div>
        </>
    )
}

export default Project
