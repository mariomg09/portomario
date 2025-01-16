import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const downloads = [
  {
    label: "Download CV",
    path: "https://drive.google.com/drive/folders/1SSFzLD6a2Lkk8UUebvIQuqcnr12gGaHs?usp=sharing",
    icon: <FiDownload />,
  },
];

/**
 * A component for displaying download buttons.
 *
 * @param {string} containerStyles
 * A class string for the container element. This should include any styles
 * for flexbox, padding, margin, etc.
 *
 * @param {string} buttonStyles
 * A class string for each button element. This should include any styles for
 * the button itself, such as color, border, etc.
 *
 * @param {string} iconStyles
 * A class string for each icon element. This should include any styles for
 * the icon size, margin, or alignment.
 *
 * @return {JSX.Element}
 * A JSX element representing the download buttons.
 */
const Download = ({ containerStyles, buttonStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {downloads.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles}
        >
          <span>{item.label}</span>
          <span className={iconStyles}>{item.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Download;
