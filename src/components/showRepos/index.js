import React from 'react';

const ShowRepos = (props) => {
    return (
        <li key={props.data.id}>
            <img src={props.data.owner && props.data.owner.avatar_url} alt="" />
            <p>{props.data.name}</p>
        </li>
    );
}

export default ShowRepos;
