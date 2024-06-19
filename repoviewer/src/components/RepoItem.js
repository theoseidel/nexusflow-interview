import React from 'react';
import styles from '../styles.module.css';

const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
};

const RepoItem = ({ repo }) => (
    <div className={styles.repoItem}>
        <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
            </a>
        </h3>
        <p>{repo.description}</p>
        <div className={styles.repoDetails}>
            <p>Languages: {repo.language}</p>
            <p>⭐ {formatNumber(repo.stargazers_count)} </p>
        </div>
    </div>
);

export default RepoItem;