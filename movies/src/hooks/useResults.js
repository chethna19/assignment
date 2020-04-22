import { useEffect, useState } from 'react';
import omdb from '../api/omdb';
import axios from 'axios';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await omdb.get(`/?apikey=20445c1b&s=${searchTerm}`
                // params: {
                //     limit: 50,
                //     term: searchTerm,
                //     location: 'San Jose'
                // }
            );
            console.log(response.data.Search);
            setResults(response.data.Search);
        }
        catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    //bad code
    //searchApi('pasta);

    useEffect(() => {
        searchApi('black');
    }, []);

    return [searchApi, results, errorMessage];
};