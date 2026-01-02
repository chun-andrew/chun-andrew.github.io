import React, {Component} from "react";
import CardDeck from "react-bootstrap/CardDeck";
import {cloud, frameworks_libraries, fullstack, languages, technologies} from "../info/skills";
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
        let langs = this.makeCards(fullstack, "Full-Stack Development");
        let cloud = this.makeCards(cloud, "Cloud Services");
        let data = this.makeCards(data, "Data Science");
        let others = this.makeCards(others, "Others");
        return(
            <div id={this.props.id} className={"WholeModule SkillsComponent"}>
                <h2> Skills </h2>
                <Fade left cascade>
                <CardDeck>
                    {langs}
                    {cloud}
                    {data}
                    {others}
                </CardDeck>
                </Fade>
            </div>
        );
    }
}