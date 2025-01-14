"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Social from "@/components/Social";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 856 9542 8725",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mariomatthewsg09@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Jalan Tanah Sereal Bukit 2, Jakarta Barat",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.7, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-blue-400">Get in Touch</h3>
              <p className="text-white/60">
                You can fill out the form below to send a message, or connect
                with me through social media
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/*textarea*/}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/*button*/}
              <Button
                size="md"
                className="max-w-40 text-primary border-2 border-blue-400 hover:bg-blue-400 hover:text-white flex items-center justify-center py-2"
              >
                Send message
              </Button>
            </form>
          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6 mb-4 xl:mb-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
              <div className="flex justify-center mt-10">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-12 h-12 border border-blue-400 rounded-full flex justify-center items-center text-xl text-blue-400 text-base hover:bg-blue-400 hover:text-primary hover:transition-all duration-500"
              />
            </div>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
