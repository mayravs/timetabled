import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h6>{props.description}</h6>
        </td>
    )
}

export default Event;