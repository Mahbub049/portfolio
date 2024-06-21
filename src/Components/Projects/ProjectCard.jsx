import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, image, server, client, technologies, description, link } =
    project;
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {name}
          </Typography>
        </div>
        <Typography color="gray" className="mb-4">
          {description}
        </Typography>
        <div className="grid grid-cols-3">
          {technologies.map((item, idx) => (
            <p
              key={idx}
              className="my-2 mx-1 text-[14px] border-2 border-blue-600 rounded-full text-center "
            >
              {item}
            </p>
          ))}
        </div>
      </CardBody>
      <CardFooter className="pt-2">
        <div className="mb-4">
          <Link to={link}>
            <Button size="lg" fullWidth={true}>
              Visit Website
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 mb-4">
          <Link to={server} className="w-full" >
            <Button size="lg" fullWidth={true}>
              Server Side
            </Button>
          </Link>
          <Link to={client} className="w-full" >
            <Button size="lg" fullWidth={true}>
              Client Side
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
