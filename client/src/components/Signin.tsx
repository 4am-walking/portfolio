import { useState } from "react"
import { signin } from "../services/auth.api";
import { Link } from 'react-router-dom';

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
    <div>
    <h2>Signin</h2>
    <form onSubmit={handleSubmit}>
        <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Sign In</button>
    </form>
        <Link to="/signup">Sign Up</Link>
    </div>
    );
};

export default Signin;