import React from "../assets/icons/react.svg";
import Typescript from "../assets/icons/typescript-plain.svg";
import TailwindCSS from "../assets/icons/tailwindcss-plain.svg";
import Javascript from "../assets/icons/javascript-plain.svg";
import HTML5 from "../assets/icons/html5-original.svg";
import CSS3 from "../assets/icons/css3-original.svg";

const listIconsTech = [
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: React,
    name: "React",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Typescript,
    name: "Typescript",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: TailwindCSS,
    name: "Tailwind CSS",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Javascript,
    name: "Javascript",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: HTML5,
    name: "HTML5",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: CSS3,
    name: "CSS3",
  },
];

export default listIconsTech;
