import { Box } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import aboutAvatar from "../assets/images/aboutAvatar.png";

const About = () => {

  const { mode } = useContext(ColorModeContext);

  return (
    <div className="m-body flex flex-col gap-16">
      <Box className="flex flex-col justify-center items-center gap-12 w-full" sx={{
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
        borderStyle: "solid",
        borderColor: mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#ffffff",
      }}>
        <h1 className="text-name font-semibold letter-spacing leading-none cursor-default select-none uppercase">Huynh Duc</h1>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <img src={aboutAvatar} alt="" className="object-cover w-full h-full" />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className={`font-light text-base text-[${mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#C0C5D0"}]`}>As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences that meet the needs of my clients and their users. I have a strong understanding of design principles and a proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition. I am confident in my ability to create designs that are both visually appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Skill: </h2>
          <div className={`font-light text-base text-[${mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#C0C5D0"}]`}>
            <li>Extensive experience in UI design, with a strong portfolio of completed projects</li>
            <li>Proficiency in design tools such as Adobe Creative Suite and Sketch</li>
            <li>Excellent visual design skills, with a strong understanding of layout, color theory, and typography</li>
            <li>Ability to create wireframes and prototypes to communicate design concepts</li>
            <li>Proficiency in HTML, CSS, and JavaScript</li>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Experience: </h2>
          <div className={`font-light text-base text-[${mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#C0C5D0"}]`}>
            <li>5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries</li>
            <li>Led the design of a successful e-commerce website, resulting in a 25% increase in online sales</li>
            <li>Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage</li>
            <li>Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic</li>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Education:</h2>
          <div className={`font-light text-base text-[${mode === "light" ? " rgba(0, 0, 0, 0.34)" : "#C0C5D0"}]`}>
            <li>Bachelor's degree in Graphic Design</li>
            <li>Certified User Experience Designer (CUED)</li>
          </div>
        </div>
      </Box>
    </div>
  )
};

export default About;
