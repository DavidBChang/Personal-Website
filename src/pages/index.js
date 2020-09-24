import React from "react";
import Title from "../components/title";
import Layout from "../components/layout"
import Header from "../components/header"
import Col from "react-bootstrap/Col";
import {
    FaRegEnvelope, FaGithub, FaLinkedinIn
} from 'react-icons/fa';

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
                <ul style={{ listStyle: `none`, float: `center` }}>
                    <Col>
                        <a
                            href="https://www.github.com/DavidBChang/"
                            title="Check out my GitHub!"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub hover_effect/>
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
                </ul>
            </footer>
        </Layout>
    );
}


