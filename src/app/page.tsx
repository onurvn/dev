"use client";

import { motion } from "framer-motion";
import { Name } from "@/components/name";
import { Projects } from "@/components/projects";
import { Stacks } from "@/components/stacks";
import { Links } from "@/components/links";
import { Certificates } from "@/components/certificates";

// Container animation with a smooth fade-in and slight scale effect
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

// Item animation with a pop-in effect and subtle rotation
const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  },
};

// Hover effect with a slight lift and glow
const linkHover = {
  scale: 1.1,
  y: -3,
  transition: { duration: 0.3, ease: "easeOut" },
  boxShadow: "0px 4px 15px rgba(0, 0, 255, 0.2)",
};

const projects = [
  {
    title: "getir-react-native",
    href: "https://github.com/onurvn/getir-react-native",
  },
  {
    title: "react-native-estate-app ",
    href: "https://github.com/onurvn/react-native-estate-app",
  },
  {
    title: "mern-notes-app",
    href: "https://github.com/onurvn/mern-notes-app",
  },
  {
    title: "twitch-clone",
    href: "https://github.com/onurvn/twitch-clone",
  },
  {
    title: "tesla-landing",
    href: "https://github.com/onurvn/tesla-landing",
  },
];

const stacks: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const links = [
  {
    title: "email",
    href: "mailto:avanonur@hotmail.com",
  },
  {
    title: "github",
    href: "https://github.com/onurvn",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/onuravan",
  },
  {
    title: "x.com",
    href: "https://x.com/myaaxe",
  },
  {
    title: "facebook",
    href: "https://facebook.com/onurravan",
  },
];

const certificates = [
  {
    title: "Beginner Frontend Web Development Path",
    href: "https://academy.patika.dev/certificates/vDEFeSGU",
  },
  {
    title: "Intermediate Frontend Web Development Path",
    href: "https://academy.patika.dev/certificates/NFpw_J8a",
  },
  {
    title: "Frontend Developer (React) Certificate",
    href: "https://www.hackerrank.com/certificates/b55a292eef47",
  },
];

export default function Homepage() {
  return (
    <motion.div
      className="flex flex-col space-y-6 pt-6 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-5" variants={itemVariants}>
        <Name />
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
          }}
        >
          I&apos;m a 27 y/o front-end and mobile developer based in Turkey. For
          the past 2 years, I&apos;ve been building user-focused,
          high-performance apps while constantly learning and keeping up with
          the latest tech trends. I mostly work with{" "}
          <motion.a
            href="https://react.dev"
            rel="noreferrer"
            target="_blank"
            className="underline-offset-4 underline font-bold text-blue-700"
            whileHover={linkHover}
          >
            React.js
          </motion.a>
          ,{" "}
          <motion.a
            href="https://nextjs.org"
            rel="noreferrer"
            target="_blank"
            className="underline-offset-4 underline font-bold text-blue-700"
            whileHover={linkHover}
          >
            Next.js
          </motion.a>
          ,{" "}
          <motion.a
            href="https://tailwindcss.com"
            rel="noreferrer"
            target="_blank"
            className="underline-offset-4 underline font-bold text-blue-700"
            whileHover={linkHover}
          >
            Tailwind CSS
          </motion.a>
          ,{" "}
          <motion.a
            href="https://reactnative.dev/"
            rel="noreferrer"
            target="_blank"
            className="underline-offset-4 underline font-bold text-blue-700"
            whileHover={linkHover}
          >
            React Native
          </motion.a>
          , and{" "}
          <motion.a
            href="https://nodejs.org"
            rel="noreferrer"
            target="_blank"
            className="underline-offset-4 underline font-bold text-blue-700"
            whileHover={linkHover}
          >
            Node.js
          </motion.a>
          .
        </motion.p>
      </motion.div>
      <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
        <motion.p variants={itemVariants}>
          I&apos;m always open to exciting opportunities, collaborations, and
          sharing knowledge with the developer community.
        </motion.p>
      </motion.div>
      <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
        <motion.span className="font-medium" variants={itemVariants}>
          Projects
        </motion.span>
        <Projects items={projects} />
      </motion.div>
      <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
        <motion.span className="font-medium" variants={itemVariants}>
          Stack
        </motion.span>
        <Stacks items={stacks} />
      </motion.div>
      <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
        <motion.span className="font-medium" variants={itemVariants}>
          Links
        </motion.span>
        <Links items={links} />
      </motion.div>
      <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
        <motion.span className="font-medium" variants={itemVariants}>
          Certificates
        </motion.span>
        <Certificates items={certificates} />
      </motion.div>
    </motion.div>
  );
}
