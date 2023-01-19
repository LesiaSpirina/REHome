import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../services/firebase';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export function SignUp() {
    const [inputs, setInputs] = useState ({email: '', password:''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signUp(inputs.email, inputs.password)
            navigate('/signin')
        } catch (error) {
            console.log(error)
            setError(error.message)
            setInputs({email: '', password: ''})
        } finally {
            setLoading(false)
        }
    }

 
    return (
    <>
        <div>SignUp</div>
        <form onSubmit={handleSubmit}>
            <label>Email :
            <input type='text'
                   value={inputs.email}
                   name='email'
                   onChange = { (e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value})) }
                   /></label>

            <br/>
            <br/>
            <label>Password
           <input type='text'
                    value={inputs.password}
                    name='password'
                    onChange = { (e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value})) }
                    /></label>
            <button>Sign Up</button>        
        </form>
        {loading && (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
      </Stack>
        )}
        {error && <p style={{color:'red'}}> {error} </p>}
        </>
    )
}