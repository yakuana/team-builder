import React from 'react';

const DisplayTeam = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.props.name}</h2>
            <p>{props.props.email}</p>
            <p>{props.props.role}</p>
        </div>
    ); 

}

export default DisplayTeam; 