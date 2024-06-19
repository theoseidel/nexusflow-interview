export const fetchRepos = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('User not found');
            } else if (response.status === 403) {
                throw new Error('API rate limit exceeded');
            } else {
                throw new Error('Failed to fetch repositories');
            }
        }

        const data = await response.json();

        return data
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
};