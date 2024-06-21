import { Progress } from "@material-tailwind/react";

const SkillsBar = ({name, value, color}) => {
  return (
    <div className="mb-2">
      <span className="ml-2 font-bold">{name}</span><br />
      <Progress
        value={value}
        className="bg-gray-400"
        color={color}
        label="Completed"
      />
    </div>
  );
};

export default SkillsBar;
