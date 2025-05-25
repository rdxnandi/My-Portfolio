import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";

export const frontend = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    color: "text-blue-300",
    colStarting: 1, // mobile
    rowStarting: 1, // mobile
    colStart: 1, // long screen
    rowStart: 1, // long screen
  },
  {
    id: 2,
    name: "Redux",
    icon: SiRedux,
    color: "text-fuchsia-300",
    colStarting: 3,
    rowStarting: 1,
    colStart: 3,
    rowStart: 1,
  },
  {
    id: 3,
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "text-blue-300",
    colStarting: 2,
    rowStarting: 2,
    colStart: 5,
    rowStart: 1,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "text-amber-300",
    colStarting: 1,
    rowStarting: 3,
    colStart: 2,
    rowStart: 2,
  },
  {
    id: 5,
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-300",
    colStarting: 3,
    rowStarting: 3,
    colStart: 4,
    rowStart: 2,
  },
  {
    id: 6,
    name: "CSS",
    icon: IoLogoCss3,
    color: "text-blue-400",
    colStarting: 2,
    rowStarting: 4,
    colStart: 1,
    rowStart: 3,
  },
  {
    id: 7,
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-400",
    colStarting: 1,
    rowStarting: 5,
    colStart: 3,
    rowStart: 3,
  },
  {
    id: 8,
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-indigo-400",
    colStarting: 3,
    rowStarting: 5,
    colStart: 5,
    rowStart: 3,
  },
  {
    id: 9,
    name: "jQuery",
    icon: DiJqueryLogo,
    color: "text-blue-400",
    colStarting: 2,
    rowStarting: 6,
    colStart: 2,
    rowStart: 4,
  },
  {
    id: 10,
    name: "SASS",
    icon: FaSass,
    color: "text-pink-300",
    colStarting: 1,
    rowStarting: 7,
    colStart: 4,
    rowStart: 4,
  },
];

export const backend = [
  {
    id: 1,
    name: "Next.js",
    icon: RiNextjsLine,
    colStart: 2,
    rowStart: 1,
  },
  {
    id: 2,
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-400",
    colStart: 1,
    rowStart: 2,
  },
  {
    id: 3,
    name: "Express",
    icon: SiExpress,
    colStart: 3,
    rowStart: 2,
  },
  {
    id: 4,
    name: "Mongodb",
    icon: SiMongodb,
    color: "text-green-400",
    colStart: 2,
    rowStart: 3,
  },
];

export const tools = [
  {
    id: 1,
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-400",
    colStart: 2,
    rowStart: 1,
  },
  {
    id: 2,
    name: "GitHub",
    icon: FaGithub,
    colStart: 1,
    rowStart: 2,
  },
  {
    id: 3,
    name: "GitLab",
    icon: FaGitlab,
    color: "text-orange-400",
    colStart: 3,
    rowStart: 2,
  },
  {
    id: 4,
    name: "Jest",
    icon: SiJest,
    color: "text-pink-400",
    colStart: 2,
    rowStart: 3,
  },
];
