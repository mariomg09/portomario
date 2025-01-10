import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mariomg09" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mariomatthews/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mariomatthewss/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
