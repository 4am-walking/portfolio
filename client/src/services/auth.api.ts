import axios from 'axios';

const signup = async ({username, email, password}: any) => {
    await axios.post('http://127.0.0.1:3000/api/auth/signup', {username, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

export {signup};