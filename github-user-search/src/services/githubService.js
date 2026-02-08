import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async ({
  keyword = "",
  location = "",
  minRepos = "",
}) => {
  let query = "";

  if (keyword.trim()) {
    query += `${keyword.trim()} `;
  }

  if (location.trim()) {
    query += `location:${location.trim()} `;
  }

  if (minRepos.trim() && !isNaN(minRepos)) {
    query += `repos:>=${minRepos.trim()} `;
  }

  query = query.trim();

  if (!query) {
    throw new Error("Please enter at least one search criterion");
  }

  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 12, // reasonable page size (GitHub max 100)
        page: 1, // start with page 1; later for pagination
      },
    });

    return {
      items: response.data.items,
      total_count: response.data.total_count,
    };
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error(
        "Rate limit exceeded. Try again later or add a GitHub token.",
      );
    }
    throw new Error("Failed to search users. Please try again.");
  }
};
