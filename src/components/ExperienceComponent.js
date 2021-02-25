import React, {Component} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {experience} from "../info/experience";
import Fade from "react-reveal/Fade";


export default class ExperienceComponent extends Component {

    makeContent(dets) {
        let retVal = [];
        for(let i=0; i<dets.length; i+=1){
            let key = i.toString();
            let detsList = [];
            for(let j=0; j<dets[i].details.length; j+=1){
                detsList.push(
                    <li>
                        {dets[i].details[j]}
                    </li>
                );
            }
            if(dets[i].location) {
                retVal.push(
                    <Fade left cascade>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={key}>
                                <p> {dets[i].title} @ <a rel="noopener noreferrer" href={dets[i].web} target="_blank">{dets[i].organization}</a> </p>
                            </Accordion.Toggle>
                                <Card.Body>
                                    <p> {dets[i].date}	&nbsp; |	&nbsp; {dets[i].location} </p>
                                    <ul>
                                        {detsList}
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Fade>
                )
            } else {
                    retVal.push(
                        <Fade left cascade>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={key}>
                                    <p> {dets[i].title} @ <a rel="noopener noreferrer" href={dets[i].web} target="_blank">{dets[i].organization}</a> </p>
                                </Accordion.Toggle>
                                    <Card.Body>
                                        <p> {dets[i].date}	&nbsp;</p>
                                        <ul>
                                            {detsList}
                                        </ul>
                                    </Card.Body>
                            </Card>
                        </Fade>
                    )
                }
        }
        return retVal;
    }

    // retVal.push(
    //     <Fade left cascade>
    //         <Card>
    //             <Accordion.Toggle as={Card.Header} eventKey={key}>
    //                 <p> {dets[i].title} @ <a rel="noopener noreferrer" href={dets[i].web} target="_blank">{dets[i].organization}</a> </p>
    //             </Accordion.Toggle>
    //             <Accordion.Collapse eventKey={key}>
    //                 <Card.Body>
    //                     <p> {dets[i].date}	&nbsp; |	&nbsp; {dets[i].location} </p>
    //                     <ul>
    //                         {detsList}
    //                     </ul>
    //                 </Card.Body>
    //             </Accordion.Collapse>
    //         </Card>
    //     </Fade>
    // )

    render() {
        let content = this.makeContent(experience);
        return(
            <div id={this.props.id} className={"WholeModule EducationComponent"}>
                <h2> Experience </h2>
                <Accordion defaultActiveKey="0">
                    {content}
                </Accordion>
            </div>
        );
    }
}