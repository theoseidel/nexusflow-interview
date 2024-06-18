import React from 'react';
import styles from '../styles.module.css';

const RepoItem = ({ repo }) => (
    <div className={styles.repoItem}>
        <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
            </a>
        </h3>
        <p>{repo.description}</p>
        <p>Languages: {repo.language}</p>
    </div>
);

export default RepoItem;