import React from "react"

export default function Image(props) {
    return (
        <img
            src={props.imgSrc}
            alt={""}
            style={{ maxWidth: "100%", borderRadius: 20 }}
            className="image"
        />
    )
}
