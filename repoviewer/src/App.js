import React, { useState } from 'react';
import GitHubIcon from './GitHubIcon';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import { fetchRepos } from './api/githubApi';
import styles from './styles.module.css';


function App() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setUsername(username);
    setLoading(true);
    setError(null);

    try {
        const repos = await fetchRepos(username);
        setRepos(repos);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};
return (
  <div className={styles.app}>
      <header className={styles.header}>
          <h1>GitHub Repositories Viewer</h1>
          <GitHubIcon />
      </header>
      <main>
          <SearchBar onSearch={handleSearch} />
          <RepoList repos={repos} loading={loading} error={error} />
      </main>
  </div>
);
}

export default App;
