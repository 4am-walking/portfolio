import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData]: any = useState(null);
    const [error, setError]: any = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:3000/api/test");
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        
        fetchData();
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            {data ? <p>{data}</p> : <p>Loading...</p>}
        </>
    );
};

export default Test;
