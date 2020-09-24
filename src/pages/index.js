import React from "react";
import Title from "../components/title";
import Layout from "../components/layout"
import Header from "../components/header"
import Col from "react-bootstrap/Col";

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
                        >
                            GitHub
                        </a>
                    </Col>

                    <Col>
                        <a
                            href="https://www.linkedin.com/in/changdavidb/"
                        >
                            LinkedIn
                        </a>
                    </Col>

                    <Col>
                        <a
                            href="mailto:changd8@uw.edu"
                        >
                            Email
                        </a>
                    </Col>
                </ul>
            </footer>
        </Layout>
    );
}


