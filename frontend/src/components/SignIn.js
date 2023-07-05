import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
      identifier: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:5500/user/login', formData);
        console.log(response.data);
        // Faites quelque chose avec la réponse
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form onSubmit={handleLogin}>
        <label>
          Nom d'utilisateur ou E-mail:
          <input type="text" name="identifier" value={formData.identifier} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Sign in" />
      </form>
    );
  };

  export default SignIn;