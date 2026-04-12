import { BsBootstrap, BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJava } from "react-icons/di";
import { FaNodeJs, FaAws } from "react-icons/fa6";

import {
  SiJavascript,
  SiMui,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiPostman,
  SiPandas,
  SiNumpy,
  SiGit,
  SiLinux,
  SiRedux,
  SiSocketdotio,
  SiTensorflow,
  SiKeras,
  SiThreedotjs,
  SiCloudinary,
} from "react-icons/si";

export const TechStackList = [
  { _id: 1, name: "HTML", icon: BsFiletypeHtml },
  { _id: 2, name: "CSS / SCSS", icon: BsFiletypeCss },
  { _id: 3, name: "Bootstrap", icon: BsBootstrap },
  { _id: 4, name: "JavaScript", icon: SiJavascript },

  { _id: 5, name: "React JS", icon: SiReact },
  { _id: 6, name: "Next.js", icon: SiNextdotjs },
  { _id: 7, name: "Redux", icon: SiRedux },
  { _id: 8, name: "Material UI", icon: SiMui },
  { _id: 9, name: "Tailwind CSS", icon: SiTailwindcss },

  { _id: 10, name: "Node.js", icon: FaNodeJs },
  { _id: 11, name: "Express.js", icon: SiExpress },
  { _id: 12, name: "REST APIs", icon: SiPostman },
  { _id: 13, name: "Socket.io", icon: SiSocketdotio },

  { _id: 14, name: "MongoDB", icon: SiMongodb },
  { _id: 15, name: "MySQL", icon: SiMysql },
  { _id: 16, name: "Firebase", icon: SiFirebase },

  { _id: 17, name: "Git", icon: SiGit },
  { _id: 18, name: "GitHub", icon: SiGithub },

  { _id: 19, name: "Python", icon: DiPython },
  { _id: 20, name: "C++", icon: CgCPlusPlus },
  { _id: 21, name: "Java", icon: DiJava },

  { _id: 22, name: "NumPy", icon: SiNumpy },
  { _id: 23, name: "Pandas", icon: SiPandas },

  // ⚠️ No official icons → using Python icon fallback
  { _id: 24, name: "Matplotlib", icon: DiPython },
  { _id: 25, name: "Seaborn", icon: DiPython },

  { _id: 26, name: "TensorFlow", icon: SiTensorflow },
  { _id: 27, name: "Keras", icon: SiKeras },

  { _id: 28, name: "AWS EC2", icon: FaAws },
  { _id: 29, name: "AWS S3", icon: FaAws },
  { _id: 30, name: "AWS Lambda", icon: FaAws },

  { _id: 31, name: "Postman", icon: SiPostman },
  { _id: 32, name: "Linux", icon: SiLinux },
  { _id: 33, name: "Three.js", icon: SiThreedotjs },
  { _id: 34, name: "Cloudinary", icon: SiCloudinary },
];
