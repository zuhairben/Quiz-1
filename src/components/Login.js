import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import login from '../img/login.jpg'
import googleIcon from '../img/google-icon.png'
import axios from "axios";

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [user, setUser] = useState({ loggedIn: false, token: "" });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios({
                url: "http://localhost:3000/auth/login",
                method: "post",
                data: data,
            });
            window.alert(res.data.msg);
            // Check if login was successful based on response data
            if(res.data.msg === "loggedIn"){
                localStorage.setItem("token", res.data.token);
                setUser({ loggedIn: true, token: res.data.token });

            }
        } catch (e) {
            window.alert("ERROR");
            console.error(e);
        }
    };


    return (
        <div className="container">
            <h1 className="heading">Login Form</h1>
            <div className="form_container">
                <div className="left">
                    <img className="img" src={login} alt="login" />
                </div>
                <div className="right">
                    <h2 className="from_heading">Login</h2>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <select
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                    >
                        <option value="">Admin</option>
                        <option value="owner">True</option>
                        <option value="user">False</option>
                    </select>
                    <button className="button" onClick={handleSubmit}>Login</button>
                    <p className="text">or</p>
                    <button className="google-button">
                        <img src={googleIcon} alt="google icon" />
                        <span>SignIn with Google</span>
                    </button>
                    <p className="text">
                        New Here? <Link to="/signup">SignUp</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;