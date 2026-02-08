import { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (newPage = 1) => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchUsers({ keyword, location, minRepos }, newPage);

      // Fetch full details for each user (like your friend does)
      const detailedUsers = await Promise.all(
        data.items.map(user => fetchUserData(user.login))
      );

      if (newPage === 1) {
        setUsers(detailedUsers);
      } else {
        setUsers(prev => [...prev, ...detailedUsers]);
      }

      setHasMore(data.items.length > 0);
      setPage(newPage);
    } catch (err) {
      setError(err.message === "Looks like we cant find the user" ? err.message : "Failed to search");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(1);
  };

  const loadMore = () => {
    handleSearch(page + 1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Form - your original, with Tailwind */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keyword / Username</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. john, react developer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Lagos, Nigeria, Berlin"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Repositories</label>
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g. 10"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-600 text-xl py-12">Loading...</div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center text-red-600 text-xl py-8 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {/* Results */}
      {users.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Found {users.length} users
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-24 h-24 rounded-full mb-4 border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {user.name || user.login}
                  </h3>
                  {user.location && <p className="text-gray-600 mt-1">📍 {user.location}</p>}
                  <p className="text-gray-600 mt-1">
                    Repositories: <span className="font-medium">{user.public_repos}</span>
                  </p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Loading more...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;