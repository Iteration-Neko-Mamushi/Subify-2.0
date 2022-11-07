import React from 'react'

export default function displayBox(props) {
    return (
        <div className="displayBox">
            <p className="ServiceDetail"> ServiceName: {props.serviceName}</p>
            <p className="ServiceDetail"> Category: {props.category}</p>
            <p className="ServiceDetail"> Monthly Price: {props.price}</p>
            <p className="ServiceDetail"> Yearly Charge: {props.price * 12}</p>
        </div>
    )
}
