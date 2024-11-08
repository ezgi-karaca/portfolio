import pizza from '../assets/pizza.jpg'
import portfolio from '../assets/portfolio.jpg'

const project = [
  {
    id: 1,
    name: 'first_project_name',
    description: "project_description_one",
    image: pizza, 
    technologies: ["React", "Node.js", "CSS", "Figma"],
    github: "https://github.com/ezgi-karaca/pizza-react",
    vercel: "https://pizza-react-mu.vercel.app/p"
  },
  {
    id: 2,
    name: "second_project_name",
    description: "project_description_two",
    image: portfolio, 
    technologies: ["React", "Node.js", "Tailwind CSS", "Figma"],
    github: "https://github.com/ezgi-karaca/portfolio",
    vercel: "https://portfolio-website.vercel.app"
  }
];

export default project;