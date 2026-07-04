export interface Project {
    title: string;
    image: string;
    description: string;
    link: string;
    git?: string
    tags: string[];
}

const myProjects: Project[] = [
    {
        title: "Next.js Portfolio",
        image: "/images/project1.jpg",
        description: "A modern portfolio website built with Next.js and TypeScript. It showcases my projects, skills, and experience in web development.",
        link: "https://example.com/project1",
        git: "https://github.com/D-Mbithi/Checkpoint-Task-Building-a-Next.js-Portfolio-Website",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Todo React App",
        image: "/images/project2.jpg",
        description: "A simple todo app built with React and TypeScript. It allows users to add, edit, and delete tasks, and demonstrates my ability to create interactive user interfaces.",
        link: "https://dmbithi-react-state-management.netlify.app/",
        git: "https://github.com/D-Mbithi/React-State-Management-Checkpoint",
        tags: ["React", "TypeScript", "Tailwind CSS", "State Management"],
    },
    {
        title: "Hotel Menu App",
        image: "/images/project3.jpg",
        description: "A responsive hotel menu application built with Vue.js and Tailwind CSS. It allows users to browse menu items, view details, and place orders, showcasing my skills in frontend development and user experience design.",
        link: "https://dmbithi-hotelmenu.netlify.app/",
        git: "https://github.com/D-Mbithi/hotel-menu-checkpoint",
        tags: ["HTML", "JavaScript", "Tailwind CSS"],
    },
    {
        title: "Random color palette generator",
        image: "/images/project4.jpg",
        description: "A simple app that generates random color palettes and allows users to save their favorite combinations.",
        link: "https://dmbithi-random-color-palette.netlify.app/",
        git: "https://github.com/D-Mbithi/Checkpoint-DOM-Project-2",
        tags: ["HTML", "JavaScript", "Tailwind CSS", "DOM Manipulation"],
    }
];

export default myProjects;