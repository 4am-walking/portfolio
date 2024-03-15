import { useState } from 'react';
import { signup } from '../services/auth.api';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import styles from '../assets/Auth.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signup({username, email, password});
  };

  return (
    <Layout>
      <div className={styles['login-page']}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" value={username} placeholder="username" onChange={handleUsernameChange} />
          <input type="email" value={email} placeholder="email" onChange={handleEmailChange} />
          <input type="password" value={password} placeholder="password" onChange={handlePasswordChange} />
          <button type="submit">sign up</button>
          <br /><br /><p className={styles.font}>already registered? <Link to="/signin" className={styles.font}><u>sign in</u></Link></p>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
