import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-scroll";
import Nav from "react-bootstrap/Nav";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineDownload} from "react-icons/ai";
import resume from "../info/Resume.pdf"

const NavBar = () => {
    return(
        <Navbar expand="md" bg="light" fixed="top" variant="dark">
            <Nav.Item>
            <Link activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}>
                    Hello!
            </Link>
            </Nav.Item>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                    <Link activeClass="active"
                          to="work"
                          spy={true}
                          smooth={true}
                          duration={500}>
                            Experience
                    </Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link activeClass="active"
                          to="education"
                          spy={true}
                          smooth={true}
                          duration={500}>
                            Education
                    </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link activeClass="active"
                              to="skills"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            Skills
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link activeClass="active"
                              to="projects"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            Projects
                        </Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Text>
                    <a href={resume} download>
                    Resume <AiOutlineDownload/>
                    </a>
                </Navbar.Text>
                <Navbar.Text>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/andrew-chun/" target="_blank">
                    LinkedIn <AiFillLinkedin/>
                    </a>
                </Navbar.Text>
                <Navbar.Text>
                    <a rel="noopener noreferrer" href="https://github.com/BlueHeron42" target="_blank">
                    GitHub <AiOutlineGithub/>
                    </a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

/* <a rel="noopener noreferrer" href="https://github.com/BlueHeron42" target="_blank">
                    Resume <AiOutlineDownload/>
                    </a> */