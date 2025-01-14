import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Modal from "./modal"; // Import the Modal component

const Card = ({ imgUrl, title, positions, gitUrl, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="relative group aspect-[6/4] bg-cover bg-center"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {/*<Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative border-[#ADB7BE] hover:border-blue-400 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-400" />
          </Link>*/}
          <a
            href={previewUrl}
            onClick={openModal}
            className="h-14 w-14 border-2 relative border-[#ADB7BE] hover:border-blue-400 group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-400" />
          </a>
        </div>
      </div>
      <div className="text-white mt-3 bg-[#171717] bg-opacity-50 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="text-[#ADB7BE]">
          {positions.map((position, index) => (
            <div key={index} className="mb-2">
              <p>{position.description}</p>
              <p>{position.time}</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} imgUrl={imgUrl} />}
    </div>
  );
};

export default Card;
