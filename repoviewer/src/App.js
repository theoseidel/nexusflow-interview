import React, { useState, useCallback } from 'react';
import GitHubIcon from './GitHubIcon';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import RepoCount from './components/RepoCount';
import { fetchRepos } from './api/githubApi';
import styles from './styles.module.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInputChange = useCallback((value) => {
      setUsername(value);
      if (value.trim() === '') {
          setRepos([]);
          setHasSearched(false);
          setError(null);
          setLoading(false);
          return;
      }
  }, []);

  // TODO: handle debounce
  const handleSearch = useCallback(async () => { 
      if (username.trim() === '') return;

      setLoading(true);
      setError(null);
      setHasSearched(true);

      try {
          const repos = await fetchRepos(username);
          setRepos(repos);
      } catch (err) {
          setRepos([]); 
          setError(err.message);
      } finally {
          setLoading(false);
      }
  }, [username]);

  return (
      <div className={styles.app}>
          <header className={styles.header}>
              <h1>GitHub Repositories Viewer</h1>
              <GitHubIcon color="#007bff" />
          </header>
          <main className={styles.main}>
              <SearchBar onInputChange={handleInputChange} onSearch={handleSearch} />
              {hasSearched && repos.length > 0 && <RepoCount count={repos.length} />}
              <RepoList repos={repos} loading={loading} error={error} />
          </main>
      </div>
  );
};

export default App;