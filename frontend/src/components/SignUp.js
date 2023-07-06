import './SignUp.css';
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    // console.log("SignUp component rendered");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await axios.post('http://127.0.0.1:5500/user/signup', formData);
            console.log(response.data);
            } catch (error) {
                console.error(error);
            }
    };

    return (
        <section className="signUpContainer">
            <form action="submit" onSubmit={handleSubmit}>
                <label>
                    Username:
                </label>
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                />
                <label>
                    E-mail:
                </label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <label>
                    Password:
                </label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                />
                <input type="submit" value="Sign up!" id="submit" />
            </form>
        </section>
    );
}

export default SignUp;