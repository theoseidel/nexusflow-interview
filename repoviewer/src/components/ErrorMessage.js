import React from 'react';
import styles from '../styles.module.css';

const ErrorMessage = ({ message }) => (
    <div className={styles.error}>{message}</div>
);

export default ErrorMessage;