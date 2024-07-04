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
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, image, server, client, technologies, description, link } =
    project;
  return (
    <Card
      data-aos="fade-up"
      className="bg-transparent text-white w-full max-w-[26rem] shadow-lg"
    >
      <CardHeader floated={false} color="blue-gray">
        <img
          className="transform hover:scale-110 transition duration-700"
          src={image}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="lg:flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="text-white font-medium"
          >
            {name}
          </Typography>
          <div className="flex mt-3 lg:mt-0 gap-1">
            <Link to={link} className="w-full">
              <Button
                size="sm"
                color="blue"
                className="flex gap-1 items-center"
                fullWidth={true}
              >
                <FaEye></FaEye> View
              </Button>
            </Link>
            <Link to={server} className="w-full">
              <Button size="sm" color="blue" fullWidth={true}>
                Server
              </Button>
            </Link>
            <Link to={client} className="w-full">
              <Button size="sm" color="blue" fullWidth={true}>
                Client
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-justify text-sm">
          <p>{description}</p>
        </div>
        <div className="mt-6">
          <p>Used Technologies:</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
          {
            technologies.map((item, idx)=><p key={idx} className="border-2 border-blue-500 hover:bg-blue-500 hover:text-black text-sm text-center rounded-full">{item}</p>)
          }
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
