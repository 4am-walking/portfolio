import axios from 'axios';
import { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        axios.post("http://localhost:3000/api/test")
            .then((response) => {
                console.log(response);
            });
    }, []); // empty dependency array means this effect runs only once, on component mount

    return (
        <>
            <p>Testing</p>
        </>
    )
};
export default Test;
