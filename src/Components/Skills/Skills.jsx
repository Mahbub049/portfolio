import { Progress } from "@material-tailwind/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillsBar from "./SkillsBar";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="mb-32" id="skills">
      <SectionTitle heading="My Skills"></SectionTitle>
      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            key={idx}
            className="flex flex-col items-center transform hover:border-blue-500 transition duration-300  border-blue-800 border-b-2 rounded-xl py-9"
          >
            <div className="h-40 flex items-center">
              <img
                className="w-40 transform hover:scale-110 transition duration-700"
                src={skill.image}
                alt=""
              />
            </div>
            <h3 className="mt-4 text-white text-lg">{skill.name}</h3>
          </div>
        ))}
      </div>
      {/* <div>
        <SkillsBar name="HTML5" value="90" color={"orange"}></SkillsBar>
        <SkillsBar name="CSS3" value="85" color="blue"></SkillsBar>
        <SkillsBar name="TailwindCSS" value="90" color="blue"></SkillsBar>
        <SkillsBar name="React.js" value="80" color={"blue"}></SkillsBar>
        <SkillsBar name="MongoDB" value="60" color={"green"}></SkillsBar>
        <SkillsBar name="MySQL" value="70" color={"cyan"}></SkillsBar>
        <SkillsBar name="Express.js" value="60" color={"brown"}></SkillsBar>
        <SkillsBar name="Node.js" value="60" color={"green"}></SkillsBar>
      </div> */}
    </div>
  );
};

export default Skills;
