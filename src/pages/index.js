import React from "react";
import Title from "../components/title";
import Layout from "../components/layout"
import Header from "../components/header"
import ProjectPreview from "../components/projectPreview"
import Col from "react-bootstrap/Col";
import {
    FaRegEnvelope, FaGithub, FaLinkedinIn, FaFilePdf
} from 'react-icons/fa';
import Row from "react-bootstrap/Row";
import MaxPrev from "../images/Max&ProgramPreview.png";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <Layout>
            <Title titleText="About Me" />
            <p>
                I am an aspiring software developer and a rising junior at <br/> University of Washington, Seattle,
                studying computer science.
            </p>
            <Header headerText="Links" />
            <footer>
                <Row>
                    <ul style={{ listStyle: `none`, float: `center` }}>
                        <Col>
                            <a
                                href="https://www.github.com/DavidBChang/"
                                title="Check out my GitHub!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </Col>

                        <Col>
                            <a
                                href="https://www.linkedin.com/in/changdavidb/"
                                title="Check out my LinkedIn!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </Col>

                        <Col>
                            <a
                                href="mailto:changd8@uw.edu"
                                title="Email me!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaRegEnvelope />
                            </a>
                        </Col>

                        <Col>
                            <a
                                href="../images/Resume.pdf"
                                title="Check out my Resume!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFilePdf />
                            </a>
                        </Col>
                    </ul>
                    <ProjectPreview
                        imageSrc={MaxPrev}
                        title={"Max&Program"}
                        date={"June 2020"}
                        preview={"\"Preserving invariants while giving clients the freedom to be creative in their implementations within\n" +
                        "                the specified constraints is extremely important in computer science, and this idea is also the basis\n" +
                        "                of the design decisions I made when developing this app. Because my intended audience...\""}

                    />
                </Row>
            </footer>
        </Layout>
    );
}


