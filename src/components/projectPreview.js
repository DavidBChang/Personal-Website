import React from "react";
import { Row, Col } from "react-bootstrap"
import Header from "./header"
import "./projectPreview.css"
import {Link} from "gatsby";

const ProjectPreview = props => {
    return (
        <div className="project_container">
            <Row>
                <Col>
                    <div className="container">
                        <img
                            src={props.imageSrc}
                            alt={""}
                            style={{ maxWidth: "100%", borderRadius: 20 }}
                            className="image"
                        />
                        <div className="middle">
                            <Link to={"/projects"} className="text">Go to Projects</Link>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h6>Preview: </h6>
                    <Header headerText={props.title}/>
                    <small>{props.date}</small>
                    <p>{props.preview}<Link to={"/projects"}>Read more</Link></p>
                </Col>
            </Row>
        </div>
    )
};

export default ProjectPreview;
