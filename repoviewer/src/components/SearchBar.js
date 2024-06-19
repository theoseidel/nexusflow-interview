import React from 'react';
import styles from '../styles.module.css';

const SearchBar = ({ onInputChange, onSearch }) => {
    const handleChange = (e) => {
        onInputChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter GitHub username"
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    );
};

export default SearchBar;