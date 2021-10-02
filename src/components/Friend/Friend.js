import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
     
    const {id , name ,email} = props.friend

    return (
        <div style={{ border:"1px solid blue",margin:'15px',padding: '10px'}}>
            <h1>{name}</h1>
            <p>E-mail : {email}</p>
            {/* <p>Phone : {phone}</p>
            <p>Street: {address.street}, suit:{address.suite}</p> */}
            {/* <p><Link to= {`/friend/${id}`}> More Info of {id}</Link></p> */}
            <Link  target='_blank' to= {`/friend/${id}`}> <p>More Info of {id}</p></Link>
        </div>
    );
};

export default Friend;