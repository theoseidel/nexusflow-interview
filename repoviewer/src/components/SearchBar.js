import React, { useState } from 'react';
import styles from '../styles.module.css';

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        if (inputValue.trim()) {
            onSearch(inputValue);
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter GitHub username"
                className={styles.input}
            />
            <button onClick={handleSearch} className={styles.button}>Search</button>
        </div>
    );
};

export default SearchBar;