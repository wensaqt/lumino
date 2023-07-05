import './SignIn.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions/authActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
      identifier: '',
      password: ''
    });

    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleLogin = async (e) => {
        e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:5500/user/login', formData);
        console.log(response.data);

        dispatch(logIn(response.data.user));
        clearInputs();
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    };

    const clearInputs = () => {
        setFormData({ identifier: '', password: '' });
    }
  
    return (

    <section className="signInContainer">
        <form onSubmit={handleLogin}>
            <label>
            Username or email:
            </label>
            <input type="text" name="identifier" value={formData.identifier} onChange={handleChange} />

            <label>
            Password:
            </label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />

            <input type="submit" value="Sign in" id="submit" />
        </form>
    </section>
    );
  };

  export default SignIn;