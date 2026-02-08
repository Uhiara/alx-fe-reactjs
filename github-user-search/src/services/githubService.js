import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined,
  },
});

// Fetch a single user's full data - for Task 1
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Looks like we cant find the user");
    }
    throw error;
  }
};

// Advanced user search using GitHub Search API
// Endpoint explicitly includes: https://api.github.com/search/users?q - for Task 2
export const searchUsers = async (
  { keyword = "", location = "", minRepos = "" },
  page = 1,
) => {
  let query = "";

  if (keyword.trim()) query += `${keyword.trim()} `;
  if (location.trim()) query += `location:${location.trim()} `;
  if (minRepos.trim() && !isNaN(minRepos))
    query += `repos:>=${minRepos.trim()} `;

  query = query.trim();

  if (!query) throw new Error("Please enter at least one search criterion");

  try {
    const response = await githubApi.get(
      `/search/users?q=${query}&page=${page}&per_page=12`,
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to search users. Please try again.");
  }
};

export default githubApi;
