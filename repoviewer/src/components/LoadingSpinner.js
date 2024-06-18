import React from 'react';
import GitHubIcon from '../GitHubIcon';
import styles from '../styles.module.css';

const LoadingSpinner = () => (
    <div className={styles.loading}>
        <GitHubIcon className={styles.spinner} />
    </div>
);

export default LoadingSpinner;