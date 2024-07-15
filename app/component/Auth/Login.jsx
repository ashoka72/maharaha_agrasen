'use client'
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import styles from './Login.module.css'; // Import module.css styles
import { useRouter} from 'next/navigation';

const Login = ({keysbro}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const router=useRouter();

    const handleLogin = (event) => {
        event.preventDefault();
        // Perform login logic here (e.g., API call, authentication)
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
        localStorage.setItem('isLoggedIn',true);
        router.push('/');
    };

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={handleLogin}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <TextField
                    className={styles.textField}
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    className={styles.textField}
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                    label="Remember Me"
                />
                <Button
                    className={styles.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>
                <Typography variant="body2" align="center" style={{ marginTop: '1em' }}>
                    <a href="#">Create Account!</a>
                </Typography>
                <Typography variant="body2" align="center" style={{ marginTop: '1em' }}>
                    <a href="#">Forgot Password?</a>
                </Typography>
            </form>
        </div>
    );
};

export default Login;




