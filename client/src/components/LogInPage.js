import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () =>{

    const [userData,setUserData] = useState({
        email : "",
        password : ""
    });

    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData,[name] : value});
    }

    const postData = async (e) => {
        e.preventDefault();

        const {email, password} = userData;

        const sendingData = await fetch("/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        const data = await sendingData.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registeration !!");
            console.log("Invalid Registeration !!");
        }else{
            window.alert("Registeration Done!!");
            console.log("Registeration Done!!");
        }
    }

    return(
        <div>
            <div className='formDiv'>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <form method='POST' className='form1'>
                        <div>
                            <input type='email' name='email' value={userData.email} onChange={handleInputs} placeholder='Email'></input>
                        </div>
                        <div>
                            <input type='password' name='password' value={userData.password} onChange={handleInputs} placeholder='Password'></input>
                        </div>
                        <div className='formBut'>
                            <button onClick={postData}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;