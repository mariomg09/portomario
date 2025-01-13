import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mariomg09" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mariomatthews/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mariomatthewss/" },
];

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A component for displaying social media icons.
 *
 * @param {string} containerStyles
 * A class string for the container element. This should include any styles
 * for flexbox, padding, margin, etc.
 *
 * @param {string} iconStyles
 * A class string for each icon element. This should include any styles for
 * the icon itself, such as color, size, etc.
 *
 * @return {JSX.Element}
 * A JSX element representing the social media icons.
 */
/******  d42f23bc-6e70-4a7d-8bdc-03e746922884  *******/
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
