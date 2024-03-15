import { useState } from "react"
import { signin } from "../services/auth.api";
import { Link } from 'react-router-dom';
import Layout from "../layout/Layout";
import styles from '../assets/Auth.module.css';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        signin({username, password});
    };

    return (
        <Layout>
            <div className={styles['login-page']}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" value={username} placeholder="username" onChange={handleUsernameChange} />
                    <input type="password" value={password} placeholder="password" onChange={handlePasswordChange} />
                    <button type="submit">sign in</button>
                    <br /><br /><p className={styles.font}>not registered? <Link to="/signup" className={styles.font}><u>sign up</u></Link></p>
                </form>
            </div>
        </Layout>
    );
};

export default Signin;
