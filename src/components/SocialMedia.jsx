import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/panditvishnuu/">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/vishnu-kant-sharma-a9b2b1257/">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://leetcode.com/u/PanditVishnu52/">
        <div>
          <FaCode />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
