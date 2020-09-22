import React from "react"
//import Footer from "./footer"
import { Link } from "gatsby"
import MediaLinks from "./mediaLinks";
//import Jumbotron from "react-bootstrap/Jumbotron";
import "./layout.css"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`, color: `teal` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>David Chang</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/projects/">Projects</ListLink>
                </ul>
            </header>
            {children}
        </div>
    )
}

const footer_styles = {
    marginTop: "3rem",
    marginBottom: "0",
    backgroundColor: "#000",
    color: "#fff",
    paddingBottom: "0",
    width: "100%",
};

