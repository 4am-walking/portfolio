import axios from 'axios';

const signup = async ({username, email, password}: any) => {
    await axios.post(import.meta.env.VITE_USERAUTH_API, {username, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

const signin = async ({username, password}: any) => {
    await axios.post(import.meta.env.VITE_SIGNIN_API, {username, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

export {signup, signin};