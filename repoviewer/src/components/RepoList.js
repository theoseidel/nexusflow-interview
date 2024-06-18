import React from 'react';
import RepoItem from './RepoItem';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import styles from '../styles.module.css';

const RepoList = ({ repos, loading, error }) => {
    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className={styles.repoList}>
            {repos.map(repo => (
                <RepoItem key={repo.id} repo={repo} />
            ))}
        </div>
    );
};

export default RepoList;