import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Social = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];

interface PropsSocials {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: PropsSocials) => {
  return (
    <div className={containerStyles}>
      {Social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
