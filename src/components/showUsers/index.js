import React from 'react';

const ShowUsers = (props) => {
    return (
        <li key={props.data.id}>
            <img src={props.data.avatar_url} alt="" />
            <p>{props.data.login}</p>
          </li>
    );
}

export default ShowUsers;
