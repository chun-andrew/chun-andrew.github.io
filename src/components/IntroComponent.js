import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from 'react-reveal/Fade';
import {AiOutlineMail} from "react-icons/ai";
import pfp from "../info/pfp.jpg";

const IntroComponent = ({
                            id
                        }) => {
    return(
        <div id={id} className={"WholeModule IntroComponent"}>
            <div className={"filler"} />
            <Row>
                <Col xs={{span: 12, order: 12}} md={{span: 6, order: 1}}>
                    <p> Hello!  </p>
                    <h1> My name is Andrew Chun. </h1>
                    <h2> I'm a computer science major looking to become a software engineer. </h2>
                    
                </Col>
                <Col xs={{span: 12, order: 5}} md={{span: 4, order: 8}}>
                    <Fade right>
                        <Image src={pfp} roundedCircle fluid/>
                    </Fade>
                </Col>
            </Row>
            <p> Some interests/skills I have include (but are not limited to!):
                <ul>
                    <li> Full-stack development </li>
                    <li> Blockchain </li>
                    <li> Data Science/Database Management </li>
                    <li> Scientific Research </li>
                </ul>
            </p>
            <Button className={"ContactButton"}
                    href={"mailto:achun@live.unc.edu"}>
                <AiOutlineMail/> Get in Touch
            </Button>
        </div>
    );
};

export default IntroComponent;

//<Image src="../info/guessifylogo.png" roundedCircle fluid/>
