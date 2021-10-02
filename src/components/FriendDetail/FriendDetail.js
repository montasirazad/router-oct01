import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import '../../App.css'

const FriendDetail = () => {
    const { Id } = useParams();
    const [friend, setFriend] = useState({})


    const { name, email, phone, website, address, company } = friend
    console.log(address)





    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    }, [])
    return (
        <div className='App'>
            <h1>Details</h1>
            <h2>Details of Id no: {Id}</h2>
            <h5>{name}</h5>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>


            <br />
            <p>Address</p>
            <p><small>Street: {address?.street} , suite: {address?.suite},City :{address?.city},
                zip code: {address?.zipcode} , Lat: {address?.geo?.lat} ,Lng: {address?.geo?.lat}</small></p> <br />

            <p>Company</p>
            <p>{company?.name}</p>
            <p>{company?.catchPhrase}</p>
            <p>{company?.bs}</p>



        </div>
    );
};

export default FriendDetail;