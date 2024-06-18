export const fetchRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    const data = await response.json();
    return data.filter(repo => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count);
};