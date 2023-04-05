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

const Navbar = () => {
  return (
    <Box className="nav">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" display={"flex"}>
          <Image
            width={"12"}
            className="logo"
            src="https://th.bing.com/th?id=OIP.Et4P7aBxUyDdYiEKMyrRtgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          />
          <Heading p={2} size="md">
            <Link to="/">
              <i>CareerComposer</i>
            </Link>
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" className="navItem">
          <Button colorScheme="white">
            <Link to="/cv">✍️Create My Resume</Link>
          </Button>
          <Button colorScheme="white">
            <a
              href="https://github.com/bhargavi35/CareerComposer"
              target="_blank"
            >
              <i className="topIcon fab fa-github-square">GitHub</i>
            </a>
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
