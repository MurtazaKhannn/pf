import { FaHtml5, FaJs, FaReact, FaNodeJs, FaCss3 } from "react-icons/fa";
import {
  SiExpress,
  SiFramer,
  SiGreensock,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";

let stack = [
  {
    name: "HTML",
    icon: <FaHtml5 color="#E34F26" />, // HTML color
    doc: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#F7DF1E" />, // JavaScript yellow
    doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: <FaReact color="#61DAFB" />, // React cyan-blue
    doc: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="#000000" />, // Next.js black
    doc: "https://nextjs.org/docs",
  },
  {
    name: "SQL",
    icon: <SiPostgresql color="#336791" />, // PostgreSQL blue
    doc: "https://www.w3schools.com/sql/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" />, // MongoDB green
    doc: "https://www.mongodb.com/docs/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" />, // PostgreSQL blue
    doc: "https://www.postgresql.org/docs/",
  },
  {
    name: "Express",
    icon: <SiExpress color="#000000" />, // Express black
    doc: "https://expressjs.com/en/starter/installing.html",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#339933" />, // Node.js green
    doc: "https://nodejs.org/en/docs/",
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio color="#010101" />, // Socket.io black
    doc: "https://socket.io/docs/v4/",
  },
  {
    name: "Prisma",
    icon: <SiPrisma color="#2D3748" />, // Prisma dark
    doc: "https://www.prisma.io/docs",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer color="#0055FF" />, // Framer Motion blue
    doc: "https://www.framer.com/motion/",
  },
  {
    name: "GSAP",
    icon: <SiGreensock color="#88CE02" />, // GSAP green
    doc: "https://greensock.com/docs/",
  },
  {
    name: "CSS",
    icon: <FaCss3 color="#1572B6" />, // CSS blue
    doc: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

export default stack;
