import React, { useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom';
import useCookies from 'react-cookie/cjs/useCookies';

const Login = (props) => {

    const [cookies, setCookies] = useCookies(['token']);

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    let nevigate = useNavigate();
    const host = "http://localhost:5000";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: credentials.username,password: credentials.password})
        });
        const json = await response.json();
        // console.log(json1);
        if(json.success===true){
            // localStorage.setItem('')
            setCookies('token',json.authToken,{ path: '/', maxAge: 3600});
            window.alert("Login Successful!!");
            nevigate(generatePath("/admin"));
        }
        else{
            window.alert("Invalid Details!!");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='container p-5'>
                <form className='container'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            User Name
                        </label>
                        <input type="text"
                            className="form-control"
                            id="email"
                            name="username"
                            aria-describedby="emailHelp"
                            value={credentials.username}
                            onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
