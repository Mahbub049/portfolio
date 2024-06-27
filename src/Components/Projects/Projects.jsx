import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch("projects.json")
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    console.log(projects);
    return (
        <div id="projects">
            <SectionTitle heading={"My Projects"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    projects.map((project, index)=><ProjectCard project={project} key={index}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;