import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import signup from '../img/signup.jpg';
import googleIcon from '../img/google-icon.png';
import axios from 'axios';

function SignUp() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        admin: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios({
              url: "http://localhost:3000/auth/signup",
              method: "post",
              data: data,
            });
            if (res.data.success) {
                navigate("/login");
                window.alert(res.data.msg);
            } else {
                window.alert(res.data.msg);
            }
          } catch (e) {
            window.alert("ERROR");
            console.error(e);
          }
    };

    return (
        <div className="container">
            <h1 className="heading">SignUp Form</h1>
            <div className="form_container">
                <div className="left">
                    <img className="img" src={signup} alt="signup" />
                </div>
                <div className="right">
                    <h2 className="from_heading">SignUp</h2>
                    <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
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
                    <button type="button" className="button" onClick={handleSubmit}>SignUp</button>
                    <p className="text">or</p>
                    <button className="google-button">
                        <img src={googleIcon} alt="google icon" />
                        <span>SignIn with Google</span>
                    </button>
                    <p className="text">
                        Already Have Account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
