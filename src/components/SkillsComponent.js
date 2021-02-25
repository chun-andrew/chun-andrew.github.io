import React, {Component} from "react";
import CardDeck from "react-bootstrap/CardDeck";
import {frameworks_libraries, languages, technologies} from "../info/skills";
import Card from "react-bootstrap/Card";
import Fade from "react-reveal/Fade";

export default class SkillsComponent extends Component {

    makeCards(info, title) {
        let list = [];
        for(let i=0; i<info.length; i+=1) {
            list.push(
                <li>
                    {info[i]}
                </li>
            )
        }
        return(
            <Card>
                <Card.Header as={"h3"}>{title}</Card.Header>
                <Card.Body>
                <Card.Text>
                        {list}
                </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    render() {
        let langs = this.makeCards(languages, "Languages");
        let tech = this.makeCards(technologies, "Technologies/Others");
        let frame = this.makeCards(frameworks_libraries, "Frameworks/Libraries");
        return(
            <div id={this.props.id} className={"WholeModule SkillsComponent"}>
                <h2> Skills </h2>
                <Fade left cascade>
                <CardDeck>
                    {langs}
                    {frame}
                    {tech}
                </CardDeck>
                </Fade>
            </div>
        );
    }
}