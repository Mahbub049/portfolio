import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Typography
        variant="small"
        className="mb-4 text-white text-center font-normal md:mb-3"
      >
        &copy; {currentYear}{" "}
        <a href="https://material-tailwind.com/">Mahbub Sarwar</a>. All
        Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;
