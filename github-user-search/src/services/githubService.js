import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async ({
  keyword = "",
  location = "",
  minRepos = "",
}) => {
  let query = "";

  if (keyword.trim()) query += `${keyword.trim()} `;
  if (location.trim()) query += `location:${location.trim()} `;
  if (minRepos.trim() && !isNaN(minRepos))
    query += `repos:>=${minRepos.trim()} `;

  query = query.trim();

  if (!query) throw new Error("Please enter at least one search criterion");

  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query, per_page: 12, page: 1 },
    });
    return {
      items: response.data.items,
      total_count: response.data.total_count || 0,
    };
  } catch (error) {
    throw new Error("Failed to search users. Please try again.");
  }
};
