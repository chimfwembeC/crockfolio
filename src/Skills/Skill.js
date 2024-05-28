import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { FaBeer } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
// import Home from "./App";
import TypewriterComponent from "../components/TypewriterComponent";
import SkillsSection from "../components/SkillsSection";
// import GithubCalenderComponent from "./components/GithubCalenderComponent";

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

function Skill() {
  // React.useEffect(() => {
  //   AOS.init({ duration: 2000 });
  //   // gsap.to('.gsap-animation', { rotation: 360, duration: 2, repeat: -1, yoyo: true });
  // }, []);

  return (
    <div className="App mt-10  px-8 py-10">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
            <div className="w-full lg:ml-8">
              <h1 className="text-3xl font-bold">
                My, <span className="text-primary"></span><Typography color="primary">Skills!</Typography>
              </h1>
              <TypewriterComponent text="Please Check All My Skills Below✨" />
              <div className="mt-2 text-lg">
                Picture this: a passionate IT diploma holder turned web wizard,
                weaving magic with PHP, Laravel, React,Nextjs, Node.js,Github,
                and More. Yes, that's me! 🎩✨
              </div>
             <div className="text-center lg:text-start py-2">
             <Button variant="contained" color="primary">Download CV</Button> 
             </div>
            </div>
          </Grid>
          {/* Image or icon on the left */}
          <Grid item xs={12} md={4}>
            {/* Add your image or icon here */}
          <div className="text-center lg:text-start">
          <Image src={"logo192.png"} alt="Your Image" />
          </div>
          </Grid>
          {/* Content on the right */}
        
        </Grid>

      </div>
     <section>
     <div>
        <SkillsSection />
      </div>
     </section>
      <section>
        <div>
          {/* <GithubCalenderComponent /> */}
        </div>
      </section>
    </div>   
  );
}

export default Skill;
