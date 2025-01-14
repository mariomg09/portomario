import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, imgUrl }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg overflow-hidden w-[100%] max-w-screen-md h-[66%] max-h-screen-lg border-4 border-primary"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-white bg-black rounded-full p-1"
        >
          ✕
        </button>
        <img
          src={imgUrl}
          alt="Larger view"
          className="w-full h-full object-cover aspect-[2/3]"
        />
      </motion.div>
    </div>
  );
};

export default Modal;
