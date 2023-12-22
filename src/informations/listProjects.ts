import DevSteam from "../assets/images/devsteam-preview.jpg";
import Pokedex from "../assets/images/pokedex-preview.jpg";
import Megaflix from "../assets/images/megaflix-preview.jpg";
import BMICalculator from "../assets/images/bmi-calculator-preview.jpg";

const listProjects = [
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: DevSteam,
    alt: "Imagem prévia DevSteam",
    width: 200,
    height: 249,
    title: "DevSteam",
    about: `Este é o projeto de um e-commerce baseado na Steam.`,
    stack: ["React", "Typescript", "Javascript", "HTML5", "CSS3"],
    linkGitHub: "https://github.com/Santana-Victor/projeto-devsteam",
    linkProject: "https://santana-victor.github.io/projeto-devsteam/",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Pokedex,
    alt: "Imagem prévia Pokédex",
    width: 200,
    height: 292,
    title: "Pokédex",
    about: `Projeto de uma Pokédex que consome a PokéAPI e exibe alguns dados do pokémon
    pesquisado.`,
    stack: ["React", "Typescript", "Javascript", "HTML5", "CSS3"],
    linkGitHub: "https://github.com/Santana-Victor/pokedex",
    linkProject: "https://pokedex-weld-chi.vercel.app/",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Megaflix,
    alt: "Imagem prévia Megaflix",
    width: 200,
    height: 488,
    title: "Megaflix",
    about: `Este projeto consome a API do TMDB e contém a funcionalidade de pesquisar filmes.`,
    stack: ["React", "Typescript", "Javascript", "HTML5", "CSS3"],
    linkGitHub: "https://github.com/Santana-Victor/megaflix",
    linkProject: "https://megaflix-nu.vercel.app/",
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: BMICalculator,
    alt: "Imagem prévia Calculadora de IMC",
    width: 200,
    height: 138,
    title: "Calculadora de IMC",
    about: `Projeto de uma calculadora de IMC.`,
    stack: ["React", "Typescript", "Javascript", "HTML5", "CSS3"],
    linkGitHub: "https://github.com/Santana-Victor/bmi-calculator",
    linkProject: "https://santana-victor.github.io/bmi-calculator/",
  },
];

export default listProjects;
