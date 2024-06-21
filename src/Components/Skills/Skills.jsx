import { Progress } from "@material-tailwind/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  return (
    <div className="mb-32" id="skills">
      <SectionTitle heading="My Skills"></SectionTitle>
      <div>
        <SkillsBar name="HTML5" value="90" color={"orange"}></SkillsBar>
        <SkillsBar name="CSS3" value="85" color="blue"></SkillsBar>
        <SkillsBar name="TailwindCSS" value="90" color="blue"></SkillsBar>
        <SkillsBar name="React.js" value="80" color={"blue"}></SkillsBar>
        <SkillsBar name="MongoDB" value="60" color={"green"}></SkillsBar>
        <SkillsBar name="MySQL" value="70" color={"cyan"}></SkillsBar>
        <SkillsBar name="Express.js" value="60" color={"brown"}></SkillsBar>
        <SkillsBar name="Node.js" value="60" color={"green"}></SkillsBar>
        {/* <SkillsBar name="HTML5" value="90"></SkillsBar> */}
      </div>
    </div>
  );
};

export default Skills;
