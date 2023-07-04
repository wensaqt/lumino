import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        alert("handleSubmit")
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                />
            </label>
            <label>
                E-mail:
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </label>
            <label>
                Password:
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                />
            </label>
            <input type="submit" value="Sign up!" />
        </form>
    );
}

export default SignUp;