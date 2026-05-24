import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';
import profilePic from '../../utils/photo.jpg';

const specializations = [
    { icon: '⚡', text: 'MERN Full Stack' },
    { icon: '▲', text: 'Next.js & TypeScript' },
    { icon: '🤖', text: 'LLM · LangChain · LangGraph' },
    { icon: '🗄️', text: 'PostgreSQL & MongoDB' },
    { icon: '🔒', text: 'JWT · Rate Limiting · SQL Injection Prevention' },
    { icon: '📱', text: 'Responsive UI' },
    { icon: '🌐', text: 'Generative AI (Learning)' },
    { icon: '☁️', text: 'AWS · EC2 · S3 · Lambda' },


    { icon: '🧠', text: 'Machine Learning · TensorFlow · Keras' },

    { icon: '🐳', text: 'Docker · VectorDB · API Gateway' },
];

const highlights = [
    { icon: '🏆', label: 'SIH 2023', value: 'Top Team · 70+ teams' },
    { icon: '💻', label: 'LeetCode', value: '400+ problems · Rank 2234' },
    { icon: '🚀', label: 'Hiring Challenges', value: 'Top 1% · Infosys & InfoEdge' },
    { icon: '🎓', label: 'TCS NQT 2026', value: 'Ninja Role · 1L+ candidates' },
];

const projectCards = [
    { count: '5+', label: 'Full Stack MERN', sub: 'React · Node · Express · MongoDB', icon: '⚡', color: 'card-mern' },
    { count: '3+', label: 'Next.js Projects', sub: 'Next.js · TypeScript · Prisma · Vercel', icon: '▲', color: 'card-next' },
    { count: '5+', label: 'ML Based Projects', sub: 'TensorFlow · Keras · ResNet · Flask', icon: '🧠', color: 'card-ml' },
    { count: '2+', label: 'AI Agent Projects', sub: 'LangChain · LangGraph · VectorDB · Docker', icon: '🤖', color: 'card-ai' },
];

const profiles = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sagar-kumar-das-889380246/',
        cls: 'linkedin-ring',
        img: 'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Sagarkumardas2002',
        cls: 'github-ring',
        svg: true,
    },
    {
        name: 'LeetCode',
        href: 'https://leetcode.com/u/sagarkumarrdas2002/',
        cls: 'leetcode-ring',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    },
    {
        name: 'GeeksForGeeks',
        href: 'https://www.geeksforgeeks.org/user/sagarpkdas_31/',
        cls: 'gfg-ring',
        img: 'https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000',
    },
    {
        name: 'Codeforces',
        href: 'https://codeforces.com/profile/sagarkdas',
        cls: 'cf-ring',
        img: 'https://img.icons8.com/?size=100&id=O3NZbfr5IZUV&format=png&color=1E90FF',
    },
    {
        name: 'CodeChef',
        href: 'https://www.codechef.com/users/sagarkdas1015',
        cls: 'codechef-ring',
        img: 'https://img.icons8.com/?size=100&id=O4SEeX66BY8o&format=png&color=000000',
    },
];

const GitHubSVG = () => (
    <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className="profile-svg">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69
            2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127
            -13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17
            -4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052
            4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6
            -10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2
            -.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052
            a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63
            9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038
            3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283
            1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526
            0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691
            C97.707 22 75.788 0 48.854 0z"/>
    </svg>
);

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id="about">

                    {/* ── Main row ── */}
                    <div className="row align-items-center">
                        <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 about-img">
                            <img src={profilePic} alt="profile_pic" />
                        </div>
                        <div className="col-md-7 col-xl-7 col-lg-7 col-xs-12 about-content p-3" id="grow">
                            <h1 className="text-center">About Me</h1>
                            <p>
                                I am <strong style={{ color: '#138781' }}>SAGAR KUMAR DAS</strong>, a Full‑Stack Engineer and
                                2025 CSE graduate from <strong style={{ color: '#138781' }}>IIIT Ranchi</strong>, specializing in
                                building <strong style={{ color: '#138781' }}>fast, scalable MERN &amp; Next.js applications</strong> with
                                real-world LLM integration using <strong style={{ color: '#138781' }}>LangChain &amp; LangGraph</strong>. I ship
                                production systems backed by <strong style={{ color: '#138781' }}>PostgreSQL (Prisma ORM)</strong>, architect
                                secure REST APIs with JWT, rate limiting, and SQL‑injection prevention, and deploy on
                                <strong style={{ color: '#138781' }}> AWS (EC2, S3, Lambda)</strong> and Vercel.
                                Currently deepening expertise in <strong style={{ color: '#138781' }}>Generative AI, VectorDBs, Docker, and cloud‑native architectures</strong> to
                                build intelligent, infrastructure‑grade software.
                            </p>
                            <div className="spec-tags">
                                {specializations.map((s, i) => (
                                    <span className="spec-tag" key={i}>
                                        <span className="spec-tag-icon">{s.icon}</span>
                                        {s.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Project stat cards ── */}
                    <div className="project-cards-row">
                        {projectCards.map((c, i) => (
                            <div className={`proj-card ${c.color}`} key={i}>
                                <div className="proj-card-icon">{c.icon}</div>
                                <div className="proj-card-count">{c.count}</div>
                                <div className="proj-card-label">{c.label}</div>
                                <div className="proj-card-sub">{c.sub}</div>
                            </div>
                        ))}
                    </div>

                    {/* ── Achievement chips ── */}
                    <div className="highlight-grid">
                        {highlights.map((h, i) => (
                            <div className="highlight-card" key={i}>
                                <span className="highlight-icon">{h.icon}</span>
                                <div className="highlight-text">
                                    <span className="highlight-label">{h.label}</span>
                                    <span className="highlight-value">{h.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Coding profiles ── */}
                    <div className="coding-profiles">
                        <div className="profile-cards-row">
                            {profiles.map((p, i) => (
                                <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="profile-card">
                                    <div className={`profile-ring ${p.cls}`}>
                                        {p.svg ? <GitHubSVG /> : <img src={p.img} alt={p.name} className="profile-ring-img" />}
                                    </div>
                                    <span className="profile-card-name">{p.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </Jump>
        </>
    );
};

export default About;