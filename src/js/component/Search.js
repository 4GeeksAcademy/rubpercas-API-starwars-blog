import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const SearchBar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const allData = [...data.people, ...data.vehicles, ...data.planets];
        const results = allData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm,
        data]);

    return (
        <div className="dropdown">
            <input
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="dropdown-toggle form-control"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="dropdown-menu dropdown-menu-end bg-light border border-dark">
                {searchResults.map(result => {
                    const partesUrl = result.url.split('/');
                    const tipoElemento = partesUrl[4];                   
                    return (
                        <li className="dropdown-item" key={result.name}>
                            <Link className="my-link" to={`/${tipoElemento}-details/${result.uid}`}>{result.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SearchBar;