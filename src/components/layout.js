import React from "react"
import { Link } from "gatsby"
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
                    <h1 style={{ display: `inline`, fontSize: 48 }}>David Chang</h1>
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

