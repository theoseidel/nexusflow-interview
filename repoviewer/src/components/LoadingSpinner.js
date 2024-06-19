import React from 'react';
import GitHubIcon from '../GitHubIcon';
import styles from '../styles.module.css';

const LoadingSpinner = () => (
    <div className={styles.loading}>
        <GitHubIcon className={styles.spinner} width="60" height="60" color="#007bff" /> 
    </div>
);

export default LoadingSpinner;