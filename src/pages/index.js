import React from "react";
import Header from "../components/header";
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <Header headerText="About Me" />
            <p>
                I am an aspiring software developer and a rising junior at <br/> University of Washington, Seattle,
                studying computer science.
            </p>
        </Layout>
    );
}


