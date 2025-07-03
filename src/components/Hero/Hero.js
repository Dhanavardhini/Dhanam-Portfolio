


import React from "react";
// import resume from "../../../public/images/Dhanavardhini Mern Stack Developer.pdf"; // ✅ Import the resume file
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Dhanavardhini
      </SectionTitle>
      <SectionText>
        A results-driven Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React.js, and Bootstrap. Committed to creating responsive, user-friendly web interfaces. Currently expanding expertise into full-stack development with Node.js, Express.js, and MongoDB to build end-to-end scalable web applications.
      </SectionText>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "0 0 80px",
        }}
      >
        {/* <LinkButton alt="upwork" href={UpworkUrl} target="_blank">
          Upwork
        </LinkButton>
        <LinkButton alt="fiverr" href={FiverUrl} target="_blank">
          Fiverr
        </LinkButton> */}
  <LinkButton
  alt="resume"
  href="/images/Dhanavardhini-Mern-Stack-Developer.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center justify-center p-3 px-3 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
>
  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-black bg-white transition-all duration-300 transform group-hover:translate-x-full ease">
    Resume
  </span>
  <span className="relative invisible"></span>
</LinkButton>

      </div>
    </LeftSection>
  </Section>
);

export default Hero;
