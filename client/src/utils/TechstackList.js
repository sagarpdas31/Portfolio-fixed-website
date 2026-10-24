import { BsBootstrap, BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJava } from "react-icons/di";
import {
  FaNodeJs,
  FaAws,
  FaRobot,
  FaBrain,
  FaBolt,
  FaServer,
  FaLink,
  FaDatabase,
  FaDiagramProject,
  FaCommentDots,
  FaCubes,
} from "react-icons/fa6";

import {
  SiOpenai,
  SiHuggingface,
  SiStreamlit,
  SiFastapi,
  SiFlask,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiMui,
  SiThreedotjs,
  SiExpress,
  SiPostman,
  SiGraphql,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiVercel,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiJest,
  SiLinux,
  SiNumpy,
  SiPandas,
  SiJupyter,
} from "react-icons/si";

const stack = [
  // 🤖 1. GenAI / LLM (core AI skills)
  { name: "LangChain", icon: FaLink },
  { name: "LangGraph", icon: FaDiagramProject },
  { name: "LLMs / GenAI", icon: FaBrain },
  { name: "OpenAI API", icon: SiOpenai },
  { name: "Groq AI", icon: FaBolt },
  { name: "Ollama (Local LLMs)", icon: FaServer },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "RAG", icon: FaDatabase },
  { name: "Vector DB (Chroma)", icon: FaCubes },
  { name: "AI Agents", icon: FaRobot },
  { name: "Prompt Engineering", icon: FaCommentDots },

  // 🌐 2. Frontend
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React JS", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Material UI", icon: SiMui },
  { name: "Bootstrap", icon: BsBootstrap },
  { name: "HTML", icon: BsFiletypeHtml },
  { name: "CSS / SCSS", icon: BsFiletypeCss },
  { name: "Three.js", icon: SiThreedotjs },

  // ⚙️ 3. Backend & APIs
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "REST APIs", icon: SiPostman },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Socket.io", icon: SiSocketdotio },

  // 🗄️ 4. Databases
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Firebase", icon: SiFirebase },

  // ☁️ 5. DevOps & Cloud
  { name: "Docker", icon: SiDocker },
  { name: "CI/CD", icon: SiGithubactions },
  { name: "AWS EC2", icon: FaAws },
  { name: "AWS S3", icon: FaAws },
  { name: "AWS Lambda", icon: FaAws },
  { name: "Nginx", icon: SiNginx },
  { name: "Vercel", icon: SiVercel },
  { name: "Cloudinary", icon: SiCloudinary },

  // 🛠️ 6. Tools
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Jest", icon: SiJest },
  { name: "Linux", icon: SiLinux },

  // 💻 7. Core Languages / DSA (foundation)
  { name: "C++", icon: CgCPlusPlus },
  { name: "Java", icon: DiJava },

  // 🐍 8. Python, ML & Data Science (last)
  { name: "Python", icon: DiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Keras", icon: SiKeras },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "Matplotlib", icon: DiPython }, // no official icon
  { name: "Seaborn", icon: DiPython }, // no official icon
  { name: "Jupyter", icon: SiJupyter },
];

export const TechStackList = stack.map((item, index) => ({
  _id: index + 1,
  ...item,
}));