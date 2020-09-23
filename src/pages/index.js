import React from "react";
import Title from "../components/title";
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <Title titleText="About Me" />
            <p>
                I am an aspiring software developer and a rising junior at <br/> University of Washington, Seattle,
                studying computer science.
            </p>
        </Layout>
    );
}


