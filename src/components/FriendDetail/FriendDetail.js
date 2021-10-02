import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {Id} = useParams();
    return (
        <div>
            <h1>Details</h1>
            <h2>Details of {Id}</h2>
        </div>
    );
};

export default FriendDetail;