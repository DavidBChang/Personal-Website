import React from "react";
import { Row, Col } from "react-bootstrap"
import Header from "./header"
import Image from "../components/image"
import "./projectPreview.css"
import {Link} from "gatsby";

const ProjectPreview = props => {
    let link = "/projects/#" + props.headerId;
    return (
        <div className="project_container">
            <Row>
                <Col>
                    <div className="container">
                        <Image imgSrc={props.imageSrc}/>
                        <div className="middle">
                            <Link to={"/projects"} className="text">Go to Projects</Link>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h6>Preview: </h6>
                    <Header headerText={props.title}/>
                    <small>{props.date}</small>
                    <p>{props.preview}<Link to={link}>Read more</Link></p>
                </Col>
            </Row>
        </div>
    )
};

export default ProjectPreview;
