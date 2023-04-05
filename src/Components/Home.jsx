import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box className="container">
      <Box className="left">
        <p className="heading">
          A <span>Resume</span> that stands out!
        </p>
        <p className="heading">
          Make your own resume. <span>It's free</span>
        </p>
        <Link to="/cv">
          {" "}
          <Button m={10} colorScheme="teal">
            Build My Resume
          </Button>
        </Link>{" "}
      </Box>
      <Box className="right">
        <Image
          src="https://media.istockphoto.com/id/1320120208/vector/resume-human-resource-management-and-hiring-concept-job-interview-recruitment-agency-3d.jpg?s=612x612&w=0&k=20&c=3bV1FBag_swIJjMVxbKOhZVm2G3ptOeRlALWKqxn_HA="
          alt="Resume"
        />
      </Box>
    </Box>
  );
};

export default Home;
