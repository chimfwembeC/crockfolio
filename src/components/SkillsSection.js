import React from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaBlender, FaPython, FaPhp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";
import { CgVercel } from "react-icons/cg";
import { BsBootstrap } from "react-icons/bs";
import { Javascript } from "@mui/icons-material";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "NextJs", icon: <RiNextjsFill /> },
  { name: "Sqlite", icon: <SiSqlite /> },
  { name: "Vercel", icon: <CgVercel /> },
  { name: "Bootstrap", icon: <BsBootstrap /> },
  { name: "Javascript", icon: <Javascript /> },
  { name: "Blender", icon: <FaBlender /> },
  { name: "Python", icon: <FaPython /> },
  { name: "PHP", icon: <FaPhp /> },
  // Add more skills as needed
];

const SkillsSection = () => {
  return (
    <div className="container mx-auto w-3/4" sx={{
      width: 500
    }}>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={2}>
        {skillsData.map((skill, index) => (
          <Grid item xs={3} sm={4} md={6} key={index}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              p={2}
              sx={{
                width: '100%',
                maxWidth: 300,
                backgroundColor: '#f0f0f0',
                boxShadow: '0px 4px 8px rgba(0, 150, 150, 0.5)',
                borderRadius: '8px',
                margin: 'auto',
                textAlign: 'center'
              }}
            >
              <IconButton sx={{ fontSize: '2rem', color: '#00796b' }}>
                {skill.icon}
              </IconButton>
              <Typography variant="h6" color="primary.dark" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsSection;
