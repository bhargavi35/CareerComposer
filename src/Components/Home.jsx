import React from "react";
import { Box, Button, Image, Heading } from "@chakra-ui/react";
import "./style.css";
import { Link } from "react-router-dom";
import cv from "./home.jpg";
const Home = () => {
  return (
    <>
      <Box className="container">
        <Box className="left">
          <p className="heading">
            A <span>Resume</span> that stands out!
          </p>
          <p className="heading">
            Make your own resume. <span>It's free</span>
          </p>
          <Link to="/cv">
            <Button m={10} colorScheme="teal">
              Build My Resume
            </Button>
          </Link>
        </Box>
        <Box className="right">
          <Image
            src="https://media.istockphoto.com/id/1320120208/vector/resume-human-resource-management-and-hiring-concept-job-interview-recruitment-agency-3d.jpg?s=612x612&w=0&k=20&c=3bV1FBag_swIJjMVxbKOhZVm2G3ptOeRlALWKqxn_HA="
            alt="Resume"
          />
        </Box>
      </Box>
      <Box>
        <Heading pt={2}>Why trying CareerComposer?</Heading>
        <Image p={2} src={cv} className="mainImg" />
      </Box>
      <br />
      <Box fontSize={22}>
        {/* You can save your data and use it in the future. */}
        <br />
        <b>what do you think! isn‘t it amazing?</b>
      </Box>
      <Link to="/cv">
        <Button m={2} colorScheme="teal">
          Show Me How!
        </Button>
      </Link>
      <br />
      <br />
    </>
  );
};

export default Home;
