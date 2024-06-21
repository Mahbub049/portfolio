import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Typography
        variant="small"
        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
      >
        &copy; {currentYear}{" "}
        <a href="https://material-tailwind.com/">Mahbub Sarwar</a>. All
        Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;
