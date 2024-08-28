import React, { useState } from 'react';

export default function Register1() {
    const [userList, setUserList] = useState([]);

    async function getData() {
        let res = await fetch("https://reqres.in/api/users?page=2", {
            method: "GET"
        });
        let json = await res.json();
        setUserList(json['data']);
    }

    return (
        <div>
            <button onClick={getData}>Click</button>
            {userList.map((obj, index) => (
                <div>
                    <h1>{obj.first_name}</h1>
                    <img
                        src = {obj.avatar}
                        style={{borderRadius:'50%'}}
                    />
                    
                </div>
            ))}
        </div>
    );
}