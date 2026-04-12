import React from 'react'
import './Project.css'
import RubberBand from "react-reveal/RubberBand"
import Spin from "react-reveal/Spin"

const Project = () => {
    return (
        <>
            <div className="container project" id="project">
                <RubberBand>
                    <h2 className='text-center col-12 mt-3 mb-1 text-uppercase'>
                        My Recent Projects
                    </h2>
                    <p className='text-center'>
                        👉 Here are my top projects with live link and source code
                    </p>
                </RubberBand>

                <div className="row" id="ads">
                    <Spin>

                        {/* CHAT APP */}
                        <div className="col-md-4 px-6">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
                                        alt="chat-app"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">Chat Web Application</h5>
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

                        {/* ECOMMERCE */}
                        <div className="col-md-4">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                                        alt="ecommerce"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">Ecommerce Website</h5>
                                    <a
                                        className="ad-btn"
                                        href="https://sagar-das-ecom-project.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Project Link
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* VIDEO CALL */}
                        <div className="col-md-4 px-6">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
                                        alt="video-call"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Next.js</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">Mongo</span>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">Video Calling Website</h5>
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

                        {/* LINKLOOM */}
                        <div className="col-md-4">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1611605698335-8b1569810432"
                                        alt="social-media"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">LinkLoom Social Media</h5>
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

                        {/* PORTFOLIO */}
                        <div className="col-md-4">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                        alt="portfolio"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">Portfolio Website</h5>
                                    <a
                                        className="ad-btn"
                                        href="https://portfolio-fixed-website-w69n.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Project Link
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* FLORA VISION */}
                        <div className="col-md-4 px-6">
                            <div className="card rounded mb-4">
                                <div className="card-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1581093588401-22b63b8f0f8c"
                                        alt="flora-vision"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">Python</span>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">Flora-Vision</h5>
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

                    </Spin>
                </div>
            </div>
        </>
    )
}

export default Project;
