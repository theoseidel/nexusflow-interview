import React from 'react';
import styles from '../styles.module.css';

const RepoCount = ({ count }) => {
    if (count === 0) {
        return null; // Render nothing if no repositories were found
    }
    return (
        <div className={styles.repoCount}>
            {`Found ${count} repositories`}
        </div>
    );
};

export default RepoCount;