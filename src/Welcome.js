import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { FaBeer } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
// import Home from "./App";
import TypewriterComponent from "./components/TypewriterComponent";
import SkillsSection from "./components/SkillsSection";
// import GithubCalenderComponent from "./components/GithubCalenderComponent";

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

function Welcome() {
  // React.useEffect(() => {
  //   AOS.init({ duration: 2000 });
  //   // gsap.to('.gsap-animation', { rotation: 360, duration: 2, repeat: -1, yoyo: true });
  // }, []);

  return (
    <div className="App py-10">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 500,
        }}
      >
        <Grid xs={6} container spacing={2}>
          {/* Image or icon on the left */}
          <Grid item md={6}>
            {/* Add your image or icon here */}
          <Box display="flex" justifyContent="center" alignItems="center">
          <Image src={"logo192.png"} alt="Your Image" />
          </Box>
          </Grid>
          {/* Content on the right */}
          <Grid item xs={12} md={6}>
            <div className="w-3/4">
              {/* <h1 className="text-3xl font-bold">
                Hello, <span className="text-blue-500">world!</span>
              </h1> */}
              <TypewriterComponent text="Welcome to My Portfolio" />
              <div className="mt-2 text-lg">
                Picture this: a passionate IT diploma holder turned web wizard,
                weaving magic with PHP, Laravel, React,Nextjs, Node.js,Github,
                and More. Yes, that's me! 🎩✨
              </div>
             <div className="flex text-center lg:justify-start mt-4">
             <Button variant="contained" color="primary">Download CV</Button> 
             </div>
            </div>
          </Grid>
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

export default Welcome;
