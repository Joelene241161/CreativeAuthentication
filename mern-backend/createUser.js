import React, {useState} from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register' ,{
                name,
                email,
                password,
            });
            setMessage('User created successfully!');
        } catch (error) {
            setMessage('Error creating user. ');
        }
    };
}